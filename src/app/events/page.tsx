'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { EventCard, Button, Input } from '@/components/ui';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import type { Event } from '@/types';

// Mock events data - 包含所有6篇文章
const allEvents: Event[] = [
  {
    id: '4',
    title: 'GROK 4 BENCHMARKS DECODED: The AI That Crushed Every Test',
    description: 'Comprehensive analysis of Grok 4\'s groundbreaking benchmark performance, including Humanity\'s Last Exam dominance and multi-agent architecture breakthrough.',
    slug: 'grok-4-benchmarks-analysis',
    timestamp: '2025-07-13T10:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: true,
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

const tags = ['ALL', 'BREAKING', 'ANALYSIS', 'INVESTIGATION'];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'reading-time'>('newest');

  // Filter and sort events
  const filteredEvents = allEvents
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === 'ALL' || event.tag === selectedTag;
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'reading-time':
          return (a.readingTime || 0) - (b.readingTime || 0);
        case 'newest':
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

  const featuredEvent = allEvents.find(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

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
                  DEEP DIVES
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive analysis and investigation of the most important Grok AI developments. 
                From technical breakthroughs to controversial incidents, we cover it all.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">{allEvents.length}</div>
                <div className="text-gray-400">Deep Dive Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {allEvents.reduce((sum, event) => sum + (event.views || 0), 0).toLocaleString()}
                </div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-400 mb-2">
                  {Math.round(allEvents.reduce((sum, event) => sum + (event.readingTime || 0), 0) / allEvents.length)}
                </div>
                <div className="text-gray-400">Avg. Read Time (min)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredEvent && (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                ⭐ FEATURED ANALYSIS
              </h2>
              <Link href={`/events/${featuredEvent.slug}`}>
                <EventCard event={featuredEvent} />
              </Link>
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
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
                />
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-brand-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {tag}
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
                  <option value="reading-time">Quick Reads</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Results Info */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing {filteredEvents.length} of {allEvents.length} articles
                {selectedTag !== 'ALL' && ` in "${selectedTag}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Articles Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {regularEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.slug}`}>
                    <EventCard event={event} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all articles.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag('ALL');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredEvents.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="secondary" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
              NEVER MISS AN ANALYSIS
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get our latest deep dives delivered to your inbox. Join thousands of AI enthusiasts 
              who rely on our comprehensive coverage.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Weekly digest • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 