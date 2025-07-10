'use client';

import React from 'react';
import { BoltIcon, DocumentTextIcon, VideoCameraIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Header, Footer } from '@/components/layout';
import { Button, Card, EventCard } from '@/components/ui';
import type { Event } from '@/types';
import Link from 'next/link';

// Mock data for demonstration - Updated to 2025
const featuredEvents: Event[] = [
  {
    id: '1',
    title: 'THE MECHAHITLER INCIDENT: Complete Timeline',
    description: 'A comprehensive analysis of the July 4th weekend controversy that sent shockwaves through the AI community. Explore the technical failures, community reactions, and xAI\'s emergency response.',
    slug: 'mechahitler-incident-timeline',
    timestamp: '2025-07-10T16:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: true,
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

const liveUpdates = [
  { time: '2m', source: '@elonmusk', content: 'Grok 4 code generation capabilities are remarkable...' },
  { time: '15m', source: '@xAI', content: 'System maintenance completed. Grok is back online with improved safety measures.' },
  { time: '1h', source: '@grok', content: 'Learning from recent events to become more helpful and harmless.' },
  { time: '2h', source: 'TechCrunch', content: 'xAI raises $6B in Series B funding round led by Andreessen Horowitz.' },
  { time: '3h', source: 'The Verge', content: 'Grok\'s controversial responses spark debate about AI safety protocols.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-brand-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-dots opacity-30" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-brand-500/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="animate-fade-in-up">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <BoltIcon className="w-12 h-12 text-brand-500 animate-pulse" />
                <span className="text-4xl font-black text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                  Grok4.Live
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-gradient-hero">
                  GROK: THE UNFILTERED CHRONICLE
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                Tracking the evolution of AI's most unpredictable model. 
                Real-time news, in-depth analysis, and comprehensive video coverage.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/events">
                  <Button size="lg" className="px-8 py-4 text-lg">
                    EXPLORE LATEST NEWS →
                  </Button>
                </Link>
                <Link href="/videos">
                  <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                    WATCH VIDEOS
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>📊 Events Tracked: 127</span>
                </div>
                <div>⏱️ Updated: 2m ago</div>
                <div>🎯 Trending: Grok 4 Release</div>
                <div>👥 Daily Visitors: 12.5K</div>
              </div>
            </div>
          </div>
        </section>

        {/* In Focus Section */}
        <section className="py-20 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                🔥 IN FOCUS
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Breaking developments and comprehensive analysis of the most important Grok AI events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <Link href={`/events/${event.slug}`} key={event.id}>
                  <EventCard
                    event={event}
                  />
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/events">
                <Button variant="secondary" size="lg">
                  VIEW ALL DEEP DIVES →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Live Feed Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-8 text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                  📈 LATEST INSIGHTS
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <div className="flex items-start gap-4">
                      <DocumentTextIcon className="w-8 h-8 text-brand-500 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Deep Analysis</h3>
                        <p className="text-gray-300 text-sm">
                          Comprehensive breakdowns of major Grok events with expert commentary and technical insights.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <VideoCameraIcon className="w-8 h-8 text-brand-500 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Video Coverage</h3>
                        <p className="text-gray-300 text-sm">
                          Curated video content with exclusive analysis and key takeaways from industry experts.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <PlayIcon className="w-8 h-8 text-brand-500 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Real-time Updates</h3>
                        <p className="text-gray-300 text-sm">
                          Live tracking of Grok developments from official sources and community discussions.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <BoltIcon className="w-8 h-8 text-brand-500 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Breaking News</h3>
                        <p className="text-gray-300 text-sm">
                          Immediate coverage of major Grok announcements, incidents, and technological breakthroughs.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Live Feed Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card variant="featured">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <h3 className="text-xl font-semibold text-white">LIVE FEED</h3>
                    </div>
                    
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {liveUpdates.map((update, index) => (
                        <div key={index} className="border-l-2 border-gray-700 pl-4 pb-4 last:pb-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-brand-500 font-medium">{update.time}</span>
                            <span className="text-xs text-gray-400">{update.source}</span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {update.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <Link href="/events">
                        <Button variant="ghost" size="sm" className="w-full">
                          VIEW FULL TIMELINE →
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
              NEVER MISS A BEAT
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest Grok AI developments delivered to your inbox. 
              Join 5,000+ AI enthusiasts who trust our analysis.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <Button>
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                No spam. Unsubscribe anytime. Privacy protected.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 