'use client';

import { useState } from 'react';
import { PlayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Video } from '@/types';

interface XVideoFallbackProps {
  video: Video;
  onRetry?: () => void;
}

export function XVideoFallback({ video, onRetry }: XVideoFallbackProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOpenX = () => {
    window.open(video.embedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative w-full bg-gray-900 rounded-lg overflow-hidden group cursor-pointer"
      style={{ aspectRatio: '16/9' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpenX}
    >
      {/* 视频截图背景 */}
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
          <div className={`w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 bg-white/30' : ''}`}>
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
                <span>{formatTime(video.duration)}</span>
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
            <p className="text-sm mb-2">Video temporarily unavailable</p>
            <p className="text-xs text-gray-500">Click to watch on X (Twitter)</p>
          </div>
          {onRetry && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onRetry();
              }}
              className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>

      {/* 悬停效果 */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
      )}
    </div>
  );
} 