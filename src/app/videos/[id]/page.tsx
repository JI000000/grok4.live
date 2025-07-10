'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HeartIcon, 
  ShareIcon, 
  EyeIcon, 
  ClockIcon,
  UserIcon,
  TagIcon,
  PlayIcon 
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Header, Footer } from '@/components/layout';
import { Button, Card } from '@/components/ui';
import { VideoPlayer } from '@/components/video/VideoPlayer';
import { VideoCard } from '@/components/video/VideoCard';
import { sampleVideos } from '@/content/videos/sample-videos';

interface PageProps {
  params: {
    id: string;
  };
}

export default function VideoDetailPage({ params }: PageProps) {
  const video = sampleVideos.find(v => v.id === params.id);
  const [isLiked, setIsLiked] = useState(false);

  if (!video) {
    notFound();
  }

  // Get related videos
  const relatedVideos = sampleVideos
    .filter(v => 
      v.id !== video.id && 
      (v.category === video.category || 
       v.tags.some(tag => video.tags.includes(tag)))
    )
    .slice(0, 6);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // 这里实现点赞逻辑
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: window.location.href
      });
    } else {
      // 降级到复制链接
      navigator.clipboard.writeText(window.location.href);
    }
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
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Video Player */}
              <div className="w-full">
                <VideoPlayer 
                  video={video}
                />
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                
                {/* Title and Category */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      video.category === 'BREAKING' ? 'bg-red-500/20 text-red-400' :
                      video.category === 'ANALYSIS' ? 'bg-blue-500/20 text-blue-400' :
                      video.category === 'DEEP_DIVE' ? 'bg-purple-500/20 text-purple-400' :
                      video.category === 'INTERVIEW' ? 'bg-green-500/20 text-green-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {video.category}
                    </span>
                    {video.featured && (
                      <span className="bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {video.title}
                  </h1>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span className="font-medium">{video.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    <span>{formatViews(video.views)} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{formatDuration(video.duration)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Published {formatTimeAgo(video.publishedAt)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isLiked 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {isLiked ? (
                      <HeartSolidIcon className="w-5 h-5" />
                    ) : (
                      <HeartIcon className="w-5 h-5" />
                    )}
                    <span className="font-medium">{formatViews(video.likes)}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <ShareIcon className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>

                  <div className="flex items-center gap-2 text-gray-400 ml-auto">
                    <ShareIcon className="w-4 h-4" />
                    <span className="text-sm">{formatViews(video.shares)} shares</span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">About this video</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {video.description}
                  </p>
                  
                  {/* Tags */}
                  {video.tags && video.tags.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TagIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-400">Tags</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {video.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Related Articles */}
                {video.relatedArticles && video.relatedArticles.length > 0 && (
                  <Card>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      📄 Related Articles
                    </h3>
                    <div className="space-y-3">
                      {video.relatedArticles.map((articleId) => (
                        <Link
                          key={articleId}
                          href={`/events/${articleId}`}
                          className="block p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="text-sm font-medium text-white mb-1">
                            {articleId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </div>
                          <div className="text-xs text-gray-400">
                            Read the full analysis →
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Up Next */}
              {relatedVideos.length > 0 && (
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    🎬 Up Next
                  </h3>
                  <div className="space-y-4">
                    {relatedVideos.slice(0, 3).map((relatedVideo) => (
                      <Link
                        key={relatedVideo.id}
                        href={`/videos/${relatedVideo.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-colors">
                          <div className="relative w-24 aspect-video rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedVideo.thumbnail}
                              alt={relatedVideo.title}
                              fill
                              sizes="96px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                              <PlayIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                              {formatDuration(relatedVideo.duration)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white line-clamp-2 mb-1">
                              {relatedVideo.title}
                            </h4>
                            <p className="text-xs text-gray-400 mb-1">{relatedVideo.author}</p>
                            <p className="text-xs text-gray-500">
                              {formatViews(relatedVideo.views)} views
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {relatedVideos.length > 3 && (
                    <div className="mt-4">
                      <Link href="/videos">
                        <Button variant="outline" className="w-full">
                          View More Videos
                        </Button>
                      </Link>
                    </div>
                  )}
                </Card>
              )}

              {/* Video Stats */}
              <Card>
                <h3 className="text-lg font-semibold text-white mb-4">📊 Video Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Views</span>
                    <span className="text-white font-medium">{formatViews(video.views)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Likes</span>
                    <span className="text-white font-medium">{formatViews(video.likes)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shares</span>
                    <span className="text-white font-medium">{formatViews(video.shares)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{formatDuration(video.duration)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Published</span>
                    <span className="text-white font-medium">{formatTimeAgo(video.publishedAt)}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* More Videos Section */}
          {relatedVideos.length > 3 && (
            <section className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">More Videos You Might Like</h2>
                <Link href="/videos">
                  <Button variant="outline">View All Videos</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedVideos.slice(3).map((relatedVideo) => (
                  <VideoCard 
                    key={relatedVideo.id} 
                    video={relatedVideo}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 