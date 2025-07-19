'use client';

import React, { useState } from 'react';

import { Header, Footer } from '@/components/layout';
import { EventCard, Button, Input } from '@/components/ui';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import type { Event } from '@/types';

// Mock events data - 包含所有10篇文章
const allEvents: Event[] = [
  {
    id: '7',
    title: 'Grok4 Live: The Viral X Broadcast That Shook the AI World',
    description: 'Exclusive analysis of the groundbreaking X broadcast that went viral globally. Watch the complete demonstration and understand why Grok4 is trending worldwide.',
    slug: 'grok4-x-broadcast-analysis',
    timestamp: '2025-07-18T10:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: false,
    readingTime: 8,
    views: 156000,
  },
  {
    id: '8',
    title: 'Grok 4 vs ChatGPT: Complete Performance Comparison 2025',
    description: 'BREAKING: Grok 4 wins 7 out of 7 categories against ChatGPT. 25.4% vs 21% accuracy, 40% cheaper API costs, and revolutionary dual-architecture design.',
    slug: 'grok4-vs-chatgpt-comparison-2025',
    timestamp: '2025-07-19T12:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: true,
    readingTime: 12,
    views: 250000,
  },
  {
    id: '10',
    title: 'Grok 4 Benchmark Performance: 25.4% Accuracy Breaks AI Records',
    description: 'BREAKING: Grok 4 achieves 25.4% accuracy on "Humanity\'s Last Exam," surpassing ChatGPT\'s 21% and setting new AI performance records across all benchmarks.',
    slug: 'grok4-benchmark-performance-2025',
    timestamp: '2025-07-19T08:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: true,
    readingTime: 14,
    views: 220000,
  },
  {
    id: '9',
    title: 'Grok 4 API Pricing & Developer Guide: Complete Analysis',
    description: 'Revolutionary pricing: $3/1M tokens input (40% cheaper than ChatGPT). Complete developer guide with cost optimization strategies and enterprise integration.',
    slug: 'grok4-api-pricing-guide',
    timestamp: '2025-07-19T10:00:00Z',
    tag: 'DEVELOPER',
    tagColor: 'green',
    featured: false,
    readingTime: 15,
    views: 180000,
  },
  {
    id: '4',
    title: 'GROK 4 BENCHMARKS DECODED: The AI That Crushed Every Test',
    description: 'Comprehensive analysis of Grok 4\'s groundbreaking benchmark performance, including Humanity\'s Last Exam dominance and multi-agent architecture breakthrough.',
    slug: 'grok-4-benchmarks-analysis',
    timestamp: '2025-07-13T10:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: false,
    readingTime: 10,
    views: 15847,
  },
  {
    id: '5',
    title: 'GROK 4 HEAVY: The $300 AI That Changes Everything',
    description: 'Deep dive into Grok 4 Heavy\'s multi-agent architecture, premium pricing strategy, and why enterprise customers are willing to pay 10x more.',
    slug: 'grok-4-heavy-analysis',
    timestamp: '2025-07-13T08:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: false,
    readingTime: 12,
    views: 9234,
  },
  {
    id: '6',
    title: 'LINDA YACCARINO RESIGNS: What It Means for Grok\'s Future',
    description: 'Breaking analysis of Linda Yaccarino\'s resignation as X CEO and its strategic implications for Grok\'s development and xAI\'s independence.',
    slug: 'linda-yaccarino-resignation-impact',
    timestamp: '2025-07-12T20:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: false,
    readingTime: 8,
    views: 11567,
  },
  {
    id: '1',
    title: 'THE MECHAHITLER INCIDENT: Complete Timeline',
    description: 'A comprehensive analysis of the July 4th weekend controversy that sent shockwaves through the AI community. Explore the technical failures, community reactions, and xAI\'s emergency response.',
    slug: 'mechahitler-incident-timeline',
    timestamp: '2025-07-10T16:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: false,
    readingTime: 8,
    views: 12453,
  },
  {
    id: '2',
    title: 'GROK 4 UNCOVERED: All Features Revealed',
    description: 'Deep dive into the latest Grok 4 release with dual-version design, performance benchmarks, and comprehensive feature analysis.',
    slug: 'grok-4-features-revealed',
    timestamp: '2025-07-10T12:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    readingTime: 12,
    views: 8762,
  },
  {
    id: '3',
    title: 'GROK\'S EVOLUTION: From Woke to Anti-Woke Gone Wrong',
    description: 'Tracking the ideological shifts in Grok\'s training and the unintended consequences that led to recent controversies.',
    slug: 'grok-evolution-woke-to-anti-woke',
    timestamp: '2025-07-10T08:00:00Z',
    tag: 'INVESTIGATION',
    tagColor: 'yellow',
    readingTime: 15,
    views: 6891,
  },
];

const tags = ['ALL', 'BREAKING', 'ANALYSIS', 'INVESTIGATION', 'DEVELOPER'];

export default function EventsPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'views' | 'readingTime'>('newest');

  // 过滤和排序事件
  const filteredEvents = allEvents
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'ALL' || event.tag === selectedTag;
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'oldest':
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        case 'views':
          return (b.views || 0) - (a.views || 0);
        case 'readingTime':
          return (b.readingTime || 0) - (a.readingTime || 0);
        default:
          return 0;
      }
    });

  // 计算统计数据
  const totalViews = allEvents.reduce((sum, event) => sum + (event.views || 0), 0);
  const avgReadingTime = Math.round(
    allEvents.reduce((sum, event) => sum + (event.readingTime || 5), 0) / allEvents.length
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              DEEP DIVES
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive analysis and investigation of the most important Grok AI developments. From technical breakthroughs to controversial incidents, we cover it all.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-1">
                  {allEvents.length}
                </div>
                <div className="text-sm text-gray-400">Deep Dive Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-1">
                  {totalViews.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-1">
                  {avgReadingTime}
                </div>
                <div className="text-sm text-gray-400">Avg. Read Time (min)</div>
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {allEvents.filter(event => event.featured).length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                FEATURED ANALYSIS
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {allEvents
                  .filter(event => event.featured)
                  .slice(0, 2)
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </div>
          )}

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort Button */}
              <div className="relative">
                <Button
                  onClick={() => setSortBy(sortBy === 'newest' ? 'oldest' : 'newest')}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300"
                >
                  <FunnelIcon className="w-4 h-4" />
                  {sortBy === 'newest' ? 'Newest First' : 'Oldest First'}
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-400">
            Showing {filteredEvents.length} of {allEvents.length} articles
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Load More Button */}
          {filteredEvents.length > 0 && (
            <div className="text-center mt-12">
              <Button className="bg-gray-800 hover:bg-gray-700 text-gray-300">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 