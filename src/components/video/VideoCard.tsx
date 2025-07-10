'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlayIcon, HeartIcon, ShareIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
  variant?: 'default' | 'featured' | 'compact';
  onLike?: (videoId: string) => void;
  onShare?: (video: Video) => void;
}

export function VideoCard({ 
  video, 
  variant = 'default',
  onLike,
  onShare 
}: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike?.(video.id);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onShare?.(video);
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const cardSizeClasses = {
    default: 'w-full',
    featured: 'w-full',
    compact: 'w-full max-w-sm'
  };

  return (
    <div className={`${cardSizeClasses[variant]} group cursor-pointer`}>
      <Link href={`/videos/${video.id}`}>
        <div 
          className="bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] border border-gray-800/50 hover:border-gray-700/50"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* 缩略图容器 */}
          <div className="relative w-full aspect-video overflow-hidden">
            
            {/* 缩略图 */}
            {!imageError ? (
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes={
                  variant === 'compact' 
                    ? '(max-width: 768px) 100vw, 300px'
                    : variant === 'featured'
                    ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                }
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
                priority={variant === 'featured'}
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gray-700 flex items-center justify-center">
                    <PlayIcon className="w-8 h-8" />
                  </div>
                  <div className="text-sm">Video Thumbnail</div>
                </div>
              </div>
            )}

            {/* 分类标签 */}
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                video.category === 'BREAKING' ? 'bg-red-500/90 text-white' :
                video.category === 'ANALYSIS' ? 'bg-blue-500/90 text-white' :
                video.category === 'DEEP_DIVE' ? 'bg-purple-500/90 text-white' :
                video.category === 'INTERVIEW' ? 'bg-green-500/90 text-white' :
                'bg-gray-500/90 text-white'
              }`}>
                {video.category}
              </span>
            </div>

            {/* 时长标签 */}
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-1 text-xs font-semibold bg-black/80 text-white rounded backdrop-blur-sm">
                {formatDuration(video.duration)}
              </span>
            </div>

            {/* 播放按钮覆盖层 */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="p-4 space-y-3">
            
            {/* 标题 */}
            <h3 className={`font-semibold text-white line-clamp-2 leading-snug ${
              variant === 'compact' ? 'text-sm' : 'text-base'
            }`}>
              {video.title}
            </h3>

            {/* 描述（仅非紧凑模式） */}
            {variant !== 'compact' && (
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                {video.description}
              </p>
            )}

            {/* 元数据行 */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-400">{video.author}</span>
                <span>•</span>
                <span>{formatTimeAgo(video.publishedAt)}</span>
              </div>
              {variant === 'featured' && (
                <span className="bg-brand-500/20 text-brand-400 px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>

            {/* 统计行 */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800/50">
              
              {/* 观看数 */}
              <div className="flex items-center gap-1 text-gray-400">
                <EyeIcon className="w-4 h-4" />
                <span className="text-xs font-medium">{formatViews(video.views)}</span>
              </div>

              {/* 操作按钮 */}
              <div className="flex items-center gap-3">
                
                {/* 点赞按钮 */}
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 transition-colors ${
                    isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                  }`}
                >
                  {isLiked ? (
                    <HeartSolidIcon className="w-4 h-4" />
                  ) : (
                    <HeartIcon className="w-4 h-4" />
                  )}
                  <span className="text-xs font-medium">{formatViews(video.likes)}</span>
                </button>

                {/* 分享按钮 */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-gray-400 hover:text-brand-400 transition-colors"
                >
                  <ShareIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">{formatViews(video.shares)}</span>
                </button>
              </div>
            </div>

            {/* 标签（仅精选模式） */}
            {variant === 'featured' && video.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                {video.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                {video.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full">
                    +{video.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
} 