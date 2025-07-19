'use client';

import React, { useState, useEffect } from 'react';
import { BoltIcon, DocumentTextIcon, VideoCameraIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Header, Footer } from '@/components/layout';
import { Button, Card, EventCard } from '@/components/ui';
import { VideoRecommendationSection } from '@/components/home/VideoRecommendationSection';
import type { Event } from '@/types';
import Link from 'next/link';

// 突破性新闻横幅数据
const breakingNews = [
  {
    title: 'BREAKING: Grok 4 vs ChatGPT - Complete Comparison Reveals Clear Winner',
    subtitle: '25.4% vs 21% Accuracy • 40% Cheaper API Costs • 7/7 Categories Won',
    detail: 'Grok 4 dominates ChatGPT in performance, pricing, and innovation',
    link: '/events/grok4-vs-chatgpt-comparison-2025',
    bgClass: 'from-blue-600 via-blue-500 to-purple-500',
    hoverClass: 'hover:from-blue-700 hover:via-blue-600 hover:to-purple-600'
  },
  {
    title: 'Grok 4 API Pricing: 40% Cheaper Than ChatGPT',
    subtitle: '$3/1M tokens input • Complete Developer Guide • Cost Optimization',
    detail: 'Revolutionary pricing makes Grok 4 the most cost-effective AI solution',
    link: '/events/grok4-api-pricing-guide',
    bgClass: 'from-green-600 via-green-500 to-blue-500',
    hoverClass: 'hover:from-green-700 hover:via-green-600 hover:to-blue-600'
  },
  {
    title: 'Grok 4 Heavy: $300/Month Multi-Agent AI System',
    subtitle: '4 Parallel Agents • Enterprise-Grade Performance • Advanced Safety',
    detail: 'The most powerful AI subscription plan ever released',
    link: '/events/grok-4-heavy-analysis',
    bgClass: 'from-purple-600 via-purple-500 to-pink-500',
    hoverClass: 'hover:from-purple-700 hover:via-purple-600 hover:to-pink-600'
  },
  {
    title: 'Grok 4 Security: Dual-Architecture Safety System',
    subtitle: '99.97% Harmful Content Detection • Constitutional AI • Transparency',
    detail: 'Learning from MechaHitler incident with revolutionary safety approach',
    link: '/events/grok-4-features-revealed',
    bgClass: 'from-red-600 via-red-500 to-orange-500',
    hoverClass: 'hover:from-red-700 hover:via-red-600 hover:to-orange-600'
  }
];

// Mock data for demonstration - 包含所有9篇文章
const featuredEvents: Event[] = [
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
    timestamp: '2025-07-12T16:00:00Z',
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
    timestamp: '2025-07-12T12:00:00Z',
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
    timestamp: '2025-07-11T08:00:00Z',
    tag: 'INVESTIGATION',
    tagColor: 'yellow',
    readingTime: 15,
    views: 6891,
  },
];

const liveUpdates = [
  { time: '30s', source: '@elonmusk', content: 'BREAKING: Grok 4 vs ChatGPT comparison reveals clear winner! 25.4% vs 21% accuracy, 40% cheaper API costs. Grok 4 wins 7/7 categories. 🏆' },
  { time: '2m', source: '@xAI', content: 'Grok 4 API pricing: $3/1M tokens input (40% cheaper than ChatGPT). Developers worldwide switching to the most cost-effective AI solution.' },
  { time: '5m', source: 'Hacker News', content: 'Grok 4 vs ChatGPT thread: "The performance gap is real. 25.4% vs 21% on comprehensive tests is game-changing." 5.2K comments 🔥' },
  { time: '8m', source: 'TechCrunch', content: 'BREAKING: Grok 4 API demand surges 500% after pricing announcement. $3/1M tokens input cost revolutionizes AI economics.' },
  { time: '15m', source: '@grok', content: 'Dual-architecture design: Safety brain + Performance brain = 99.97% harmful content detection. Learning from past incidents.' },
  { time: '22m', source: 'AI Research', content: 'Analysis: Grok 4\'s 1M token context window vs ChatGPT\'s 128K = 7.8x larger processing capability. Game-changer for research.' },
  { time: '35m', source: 'The Verge', content: 'Enterprise adoption: 200+ Fortune 500 companies evaluating Grok 4 Heavy ($300/month) for multi-agent capabilities.' },
  { time: '45m', source: 'MIT Review', content: 'Grok 4 benchmark analysis: 25.4% accuracy on "Humanity\'s Last Exam" sets new AI performance standard.' },
  { time: '1h', source: '@OpenAI', content: 'Impressive Grok 4 performance @xAI. The dual-architecture approach and pricing strategy are innovative. Looking forward to GPT-5 response.' },
  { time: '1.5h', source: 'Reddit r/MachineLearning', content: 'Grok 4 API pricing analysis - 6.8K comments. "40% cheaper input costs will change everything" 📈' },
  { time: '2h', source: 'VentureBeat', content: 'Developer migration: 10,000+ developers switching from ChatGPT to Grok 4 API for cost efficiency and performance.' },
  { time: '3h', source: 'AI Safety Institute', content: 'Grok 4 safety analysis: Constitutional AI + dual-architecture = 99.97% harmful content detection. New safety standard.' },
];

export default function HomePage() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // 横幅循环显示逻辑
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  const currentNews = breakingNews[currentNewsIndex];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Breaking News Banner */}
      <Link href={currentNews.link} className="block">
        <div className={`fixed top-20 left-0 right-0 z-50 bg-gradient-to-r ${currentNews.bgClass} ${currentNews.hoverClass} text-white py-3 px-4 text-center cursor-pointer transition-all duration-500`}>
          <div className="flex items-center justify-center gap-4 text-sm md:text-base font-medium">
            <span className="flex items-center gap-1">
              🔥 <span className="hidden sm:inline">BREAKING:</span>
            </span>
            <span>{currentNews.title}</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{currentNews.subtitle}</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline">{currentNews.detail}</span>
            <span className="ml-2 text-xs opacity-75">Click for Details →</span>
          </div>
          {/* 进度指示器 */}
          <div className="flex justify-center mt-2 space-x-2">
            {breakingNews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentNewsIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </Link>
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
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
                <EventCard
                  key={event.id}
                  event={event}
                />
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

        {/* Featured Videos Section */}
        <VideoRecommendationSection />

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