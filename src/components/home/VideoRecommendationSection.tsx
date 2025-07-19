'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { VideoCard } from '@/components/video/VideoCard';
import { featuredVideos } from '@/content/videos/sample-videos';
import type { Video } from '@/types';

export function VideoRecommendationSection() {
  const handleLike = (_videoId: string) => {
    // 处理点赞逻辑
    // 这里可以添加实际的点赞API调用
  };

  const handleShare = (video: Video) => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: `/videos/${video.id}`
      });
    } else {
      // 降级到复制链接
      navigator.clipboard.writeText(`${window.location.origin}/videos/${video.id}`);
    }
  };

  if (featuredVideos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
              🎥 <span className="text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                FEATURED VIDEOS
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Exclusive interviews, expert analysis, and breaking news coverage 
              of the latest Grok AI developments
            </p>
          </div>
          <Link href="/videos">
            <Button variant="outline" className="hidden md:flex">
              View All Videos →
            </Button>
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredVideos.slice(0, 4).map((video) => (
            <VideoCard 
              key={video.id} 
              video={video}
              variant="featured"
              onLike={handleLike}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/videos">
            <Button size="lg" variant="primary" className="md:hidden">
              🎬 Explore All Videos
            </Button>
          </Link>
          
          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-8 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-400 mb-1">
                {featuredVideos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-400 mb-1">
                {Math.round(featuredVideos.reduce((sum, video) => sum + video.duration, 0) / 60)}
              </div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-400 mb-1">
                {featuredVideos.length}
              </div>
              <div className="text-sm text-gray-400">Featured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 