import React from 'react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { PlayIcon, EyeIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
  className?: string;
  showAnalysis?: boolean;
}

export function VideoCard({ video, className, showAnalysis = false }: VideoCardProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const handleVideoClick = () => {
    if (video.url) {
      window.open(video.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={cn(
      'group bg-gray-950/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer',
      'hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300',
      'hover:shadow-xl hover:shadow-brand-500/10',
      className
    )}
    onClick={handleVideoClick}
    >
      
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <PlayIcon className="w-16 h-16 text-gray-600" />
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div 
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleVideoClick();
            }}
          >
            <PlayIcon className="w-8 h-8 text-black ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Live Badge */}
        {video.isLive && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
        )}

        {/* Category Badge */}
        {video.category && (
          <div className="absolute top-2 right-2 bg-brand-500/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {video.category}
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-6">
        
        {/* Video Title */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-brand-400 transition-colors">
          {video.title}
        </h3>

        {/* Video Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {video.description}
        </p>

        {/* Video Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            <span>{formatDate(video.publishedAt)}</span>
          </div>
          
          {video.views && (
            <div className="flex items-center gap-1">
              <EyeIcon className="w-3 h-3" />
              <span>{formatViews(video.views)} views</span>
            </div>
          )}

          {video.duration && !video.isLive && (
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              <span>{formatDuration(video.duration)}</span>
            </div>
          )}
        </div>

        {/* Channel Info */}
        {video.channel && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {video.channel.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{video.channel}</div>
              {video.subscribers && (
                <div className="text-xs text-gray-500">{formatViews(video.subscribers)} subscribers</div>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50"
              >
                #{tag}
              </span>
            ))}
            {video.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50">
                +{video.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Grok4.Live Analysis */}
        {showAnalysis && video.analysis && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-brand-400 mb-2 flex items-center gap-2">
                📝 Grok4.Live Analysis
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {video.analysis}
              </p>
              <button className="text-xs text-brand-400 hover:text-brand-300 mt-2 transition-colors">
                Read full analysis →
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleVideoClick();
            }}
            className="flex-1 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <PlayIcon className="w-4 h-4" fill="currentColor" />
            {video.isLive ? 'Join Live' : 'Watch Now'}
          </button>
          
          <button 
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-colors"
            title="Save to favorites"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          <button 
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-colors"
            title="Share video"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 