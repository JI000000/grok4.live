'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { VideoCard, Button, Input } from '@/components/ui';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Video } from '@/types';

// Mock videos data
const allVideos: Video[] = [
  {
    id: '1',
    title: 'Grok 4 Live Demo: Dual-Architecture in Action',
    description: 'First-ever live demonstration of Grok 4\'s revolutionary dual-brain architecture, showcasing safety and performance systems working in harmony.',
    url: 'https://x.com/videos/grok4-demo',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    duration: 892, // seconds
    publishedAt: '2025-07-10T14:00:00Z',
    views: 45672,
    channel: 'xAI Official',
    subscribers: 234000,
    category: 'Demo',
    tags: ['Grok 4', 'AI Demo', 'Architecture'],
    analysis: 'This demo reveals the technical sophistication behind Grok 4\'s safety-first approach while maintaining unprecedented performance levels.',
    isLive: false,
  },
  {
    id: '2', 
    title: 'Elon Musk Discusses MechaHitler Incident Response',
    description: 'In-depth interview covering the timeline, technical failures, and comprehensive safety improvements implemented after the July incident.',
    url: 'https://x.com/spaces/musk-mechahitler',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
    duration: 2847,
    publishedAt: '2025-07-08T20:00:00Z',
    views: 127893,
    channel: 'X Spaces',
    subscribers: 1200000,
    category: 'Interview',
    tags: ['Elon Musk', 'AI Safety', 'Controversy'],
    analysis: 'Musk\'s candid discussion provides unprecedented insight into xAI\'s crisis management and lessons learned from the safety incident.',
    isLive: false,
  },
  {
    id: '3',
    title: 'Constitutional AI Explained: The Future of Safe AI',
    description: 'Technical deep-dive into constitutional AI principles and how they\'re implemented in modern language models like Grok 4.',
    url: 'https://youtube.com/watch?v=constitutional-ai',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    duration: 1456,
    publishedAt: '2025-07-09T16:30:00Z',
    views: 89234,
    channel: 'AI Research Institute',
    subscribers: 456000,
    category: 'Education',
    tags: ['Constitutional AI', 'AI Safety', 'Technical'],
    analysis: 'Excellent breakdown of constitutional AI principles, essential viewing for understanding Grok 4\'s safety architecture.',
    isLive: false,
  },
  {
    id: '4',
    title: 'LIVE: Grok 4 Performance Benchmarks',
    description: 'Real-time performance testing and analysis of Grok 4 across multiple domains including coding, reasoning, and safety metrics.',
    url: 'https://youtube.com/live/grok4-benchmarks',
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
    duration: 0,
    publishedAt: '2025-07-10T18:00:00Z',
    views: 12847,
    channel: 'TechBench Live',
    subscribers: 89000,
    category: 'Live',
    tags: ['Benchmarks', 'Performance', 'Live Testing'],
    analysis: 'Comprehensive performance analysis showing Grok 4\'s advantages across multiple evaluation metrics.',
    isLive: true,
  },
];

const categories = ['All', 'Demo', 'Interview', 'Education', 'Live', 'Analysis'];
const tags = ['Grok 4', 'AI Safety', 'Elon Musk', 'Technical', 'Constitutional AI', 'Performance'];

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'duration'>('newest');

  // Filter and sort videos
  const filteredVideos = allVideos
    .filter(video => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (video.channel || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => (video.tags || []).includes(tag));
      
      return matchesSearch && matchesCategory && matchesTags;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'duration':
          return (b.duration || 0) - (a.duration || 0);
        case 'newest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
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
                  VIDEO CENTER
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Curated video content covering Grok AI developments, expert interviews, 
                technical demonstrations, and exclusive analysis from the AI community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">{allVideos.length}</div>
                <div className="text-gray-400">Videos Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {Math.round(allVideos.reduce((sum, video) => sum + (video.duration || 0), 0) / 3600)}h
                </div>
                <div className="text-gray-400">Total Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {allVideos.filter(v => v.isLive).length}
                </div>
                <div className="text-gray-400">Live Streams</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
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

              {/* Category Filter */}
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
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'duration')}
                className="px-4 py-2 bg-gray-800/50 text-white border border-gray-700 rounded-lg text-sm"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="duration">Longest First</option>
              </select>
            </div>

            {/* Tag Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-400 mr-2">Tags:</span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'bg-gray-800/30 text-gray-400 border border-gray-700/30 hover:bg-gray-700/30'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    showAnalysis={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold text-white mb-2">No videos found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all videos.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedTags([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredVideos.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="secondary" size="lg">
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