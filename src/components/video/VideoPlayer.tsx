'use client';

import { useState, useRef, useEffect } from 'react';
import { PlayIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import type { Video } from '@/types';

import { XVideoEmbed } from './XVideoEmbed';

interface VideoPlayerProps {
  video: Video;
  autoplay?: boolean;
}

export function VideoPlayer({ 
  video, 
  autoplay = false
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(!autoplay);
  const [hasStarted, setHasStarted] = useState(autoplay);

  useEffect(() => {
    // 模拟加载完成
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    setShowOverlay(false);
    setHasStarted(true);
    
    // Google Analytics 追踪
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'video_start', {
        video_id: video.id,
        video_title: video.title
      });
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 构建视频 URL，支持 YouTube 和 X 视频
  const getEmbedUrl = () => {
    const baseUrl = video.embedUrl;
    
    // 检查是否为 X 视频
    if (baseUrl.includes('x.com/i/broadcasts')) {
      // X 视频需要转换为正确的嵌入格式
      const broadcastId = baseUrl.split('/').pop();
      const origin = typeof window !== 'undefined' ? window.location.origin : 'https://grok4.live';
      return `https://x.com/i/broadcasts/1/embed/${broadcastId}?parent=${encodeURIComponent(origin)}`;
    }
    
    // YouTube 视频处理
    const params = new URLSearchParams();
    
    if (autoplay || hasStarted) {
      params.append('autoplay', '1');
    }
    params.append('rel', '0'); // 不显示相关视频
    params.append('modestbranding', '1'); // 减少 YouTube 品牌展示
    params.append('controls', '1'); // 显示控制栏
    params.append('enablejsapi', '1'); // 启用 JS API
    
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${params.toString()}`;
  };

  // 如果是X视频，使用官方嵌入方式
  if (video.embedUrl.includes('x.com/i/broadcasts')) {
    return (
      <div ref={containerRef} className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <XVideoEmbed video={video} />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-black rounded-lg overflow-hidden group"
      style={{ aspectRatio: '16/9' }}
    >
      {/* 视频 iframe */}
      <div className="absolute inset-0">
        {video.embedUrl.includes('x.com/i/broadcasts') ? (
          // X 视频使用特殊的嵌入方式
          <iframe
            src={`https://x.com/i/broadcasts/1/embed/${video.embedUrl.split('/').pop()}?parent=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : 'grok4.live'}&theme=dark`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          // YouTube 和其他视频
          <iframe
            src={getEmbedUrl()}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* 播放前覆盖层 */}
      {showOverlay && !hasStarted && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
          <button
            onClick={handlePlayClick}
            className="group/play flex flex-col items-center gap-4 text-white hover:text-brand-400 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group-hover/play:bg-brand-500/20">
              <PlayIcon className="w-10 h-10 ml-1" />
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Play Video</div>
              <div className="text-sm text-gray-300">{formatTime(video.duration)}</div>
            </div>
          </button>
        </div>
      )}

      {/* 加载状态 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-20">
          <div className="flex items-center gap-3 text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500"></div>
            <span>Loading video...</span>
          </div>
        </div>
      )}

      {/* 视频信息覆盖层（顶部，仅在悬停时显示） */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex items-center justify-between text-white">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg line-clamp-1 mb-1">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.author}</p>
          </div>
          <div className="flex items-center gap-3 text-sm ml-4">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              video.category === 'BREAKING' ? 'bg-red-500/80 text-white' :
              video.category === 'ANALYSIS' ? 'bg-blue-500/80 text-white' :
              video.category === 'DEEP_DIVE' ? 'bg-purple-500/80 text-white' :
              video.category === 'INTERVIEW' ? 'bg-green-500/80 text-white' :
              'bg-gray-500/80 text-white'
            }`}>
              {video.category}
            </span>
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              title="Fullscreen"
            >
              <ArrowsPointingOutIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 底部信息栏（仅在未开始播放时显示） */}
      {!hasStarted && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-3">
              <span className="font-medium">{formatTime(video.duration)}</span>
              <span>•</span>
              <span>{video.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">HD</span>
              {video.subtitles.length > 0 && (
                <span className="text-xs bg-white/20 px-2 py-1 rounded">CC</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 