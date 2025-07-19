'use client';

import { useEffect, useRef, useState } from 'react';
import { PlayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Video } from '@/types';

interface XVideoEmbedProps {
  video: Video;
}

export function XVideoEmbed({ video }: XVideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [embedTimeout, setEmbedTimeout] = useState(false);

  useEffect(() => {
    // 设置超时检测 - 15秒后如果还没有渲染成功，显示备用方案
    const timeoutId = setTimeout(() => {
      setEmbedTimeout(true);
      setIsLoading(false);
    }, 15000);

    // 动态加载X的widgets.js脚本
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    
    script.onload = () => {
      // 重新渲染X嵌入
      if (typeof window !== 'undefined' && (window as any).twttr && (window as any).twttr.widgets) {
        (window as any).twttr.widgets.load(containerRef.current);
        
        // 检查是否成功渲染
        setTimeout(() => {
          const tweetElement = containerRef.current?.querySelector('.twitter-tweet-rendered');
          if (tweetElement) {
            setIsLoading(false);
            clearTimeout(timeoutId);
          } else {
            setEmbedTimeout(true);
            setIsLoading(false);
          }
        }, 5000); // 给5秒时间让X渲染
      } else {
        setEmbedFailed(true);
        setIsLoading(false);
        clearTimeout(timeoutId);
      }
    };
    
    script.onerror = () => {
      setEmbedFailed(true);
      setIsLoading(false);
      clearTimeout(timeoutId);
    };
    
    // 如果脚本已经存在，先移除
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // 清理函数
    return () => {
      clearTimeout(timeoutId);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // 从X URL中提取broadcast ID
  const getBroadcastId = (url: string) => {
    const match = url.match(/\/i\/broadcasts\/([^/?]+)/);
    return match ? match[1] : '';
  };

  const broadcastId = getBroadcastId(video.embedUrl);

  const handleOpenX = () => {
    window.open(video.embedUrl, '_blank', 'noopener,noreferrer');
  };

  // 如果嵌入失败、超时或没有broadcast ID，显示备用方案
  if (embedFailed || embedTimeout || !broadcastId) {
    return (
      <div 
        ref={containerRef} 
        className="relative w-full bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
        style={{ aspectRatio: '16/9' }}
        onClick={handleOpenX}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* X Logo */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
              <span className="text-white text-lg font-bold">𝕏</span>
              <span className="text-white text-sm font-medium">Live</span>
            </div>
          </div>

          {/* 播放按钮 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group-hover:bg-brand-500/20">
              <PlayIcon className="w-12 h-12 text-white ml-1" />
            </div>
          </div>

          {/* 视频信息覆盖层 */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between text-white">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span>{video.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>30:00</span>
                  <span>•</span>
                  <span>Published Yesterday</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenX();
                  }}
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Watch on X</span>
                </button>
              </div>
            </div>
          </div>

          {/* 错误提示 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-lg p-6 text-center max-w-md">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-sm mb-2">Click to watch on X (Twitter)</p>
              <p className="text-xs text-gray-500">Official X broadcast</p>
            </div>
          </div>
        </div>

        {/* 悬停效果 */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full" style={{ aspectRatio: '16/9' }}>
      <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-3 text-white">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500"></div>
              <span>Loading X video...</span>
            </div>
          </div>
        )}
        
        <blockquote 
          className="twitter-tweet w-full h-full"
          data-theme="dark"
          data-dnt="true"
          data-conversation="none"
        >
          <a href={`https://x.com/i/broadcasts/${broadcastId}`}></a>
        </blockquote>
        
        {/* 备用点击区域 */}
        <div 
          className="absolute inset-0 z-20 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleOpenX}
          title="Click to watch on X"
        />
      </div>
    </div>
  );
} 