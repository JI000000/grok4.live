'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Header, Footer } from '@/components/layout';
import { Input, Button } from '@/components/ui';
import { VideoCard } from '@/components/video/VideoCard';
import { sampleVideos } from '@/content/videos/sample-videos';
import type { Video, VideoCategory } from '@/types';

const categories = ['ALL', 'BREAKING', 'ANALYSIS', 'DEEP_DIVE', 'INTERVIEW', 'TUTORIAL', 'NEWS'] as const;

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | VideoCategory>('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'duration'>('newest');

  // Filter and sort videos
  const filteredVideos = sampleVideos
    .filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'ALL' || video.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views;
        case 'duration':
          return a.duration - b.duration;
        case 'newest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });

  const featuredVideos = filteredVideos.filter(video => video.featured);
  const regularVideos = filteredVideos.filter(video => !video.featured);

  const handleLike = (videoId: string) => {
    console.log('Liked video:', videoId);
    // 这里实现点赞逻辑
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

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-b from-gray-950/50 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                <span className="text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                  🎥 VIDEOS
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                In-depth video analysis, exclusive interviews, and breaking news coverage 
                of the latest Grok AI developments and industry insights.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">{sampleVideos.length}</div>
                <div className="text-gray-400">Total Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {sampleVideos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}
                </div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {Math.round(sampleVideos.reduce((sum, video) => sum + video.duration, 0) / 60)}
                </div>
                <div className="text-gray-400">Hours of Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {featuredVideos.length}
                </div>
                <div className="text-gray-400">Featured Videos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        {featuredVideos.length > 0 && (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                ⭐ FEATURED VIDEOS
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredVideos.map((video) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    variant="featured"
                    onLike={handleLike}
                    onShare={handleShare}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="py-8 bg-gray-950/30 sticky top-20 z-40 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              
              {/* Search */}
              <div className="flex-1 max-w-md">
                <Input
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-brand-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <FunnelIcon className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="duration">Shortest First</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Results Info */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing {filteredVideos.length} of {sampleVideos.length} videos
                {selectedCategory !== 'ALL' && ` in "${selectedCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Videos Grid */}
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularVideos.map((video) => (
                                  <VideoCard 
                  key={video.id} 
                  video={video}
                  onLike={handleLike}
                  onShare={handleShare}
                />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-white mb-2">No videos found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {filteredVideos.length > 12 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Videos
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 