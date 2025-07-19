import React from 'react';
import { Header, Footer } from '@/components/layout';
import { EventCard } from '@/components/ui';
import { getAllMDXContents } from '@/lib/mdx';
import type { Event } from '@/types';

export default function EventsPage() {
  // 获取所有MDX内容
  const mdxContents = getAllMDXContents();
  
  // 转换为Event格式
  const allEvents: Event[] = mdxContents.map(content => ({
    id: content.slug,
    title: content.title,
    description: content.description,
    slug: content.slug,
    timestamp: content.publishedAt,
    tag: content.category,
    tagColor: (content.category === 'BREAKING' ? 'red' : 
              content.category === 'ANALYSIS' ? 'blue' : 
              content.category === 'DEVELOPER' ? 'green' : 'purple') as 'red' | 'blue' | 'green' | 'purple' | 'yellow',
    featured: content.featured,
    readingTime: content.readingTime,
    views: 0, // 暂时设为0，后续可从数据库获取
  }));

  // 获取所有标签
  const allTags = Array.from(new Set(allEvents.map(event => event.tag)));
  const tags = ['ALL', ...allTags];

  // 计算统计数据
  const totalViews = allEvents.reduce((sum, event) => sum + (event.views || 0), 0);
  const avgReadingTime = Math.round(
    allEvents.reduce((sum, event) => sum + (event.readingTime || 5), 0) / allEvents.length
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Deep Dives
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              In-depth analysis, breaking news, and comprehensive coverage of the AI revolution
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
              <span>{allEvents.length} articles</span>
              <span>{totalViews.toLocaleString()} total views</span>
              <span>{avgReadingTime} min avg read</span>
            </div>
          </div>

          {/* Featured Article */}
          {allEvents.filter(event => event.featured).length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured</h2>
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

          {/* Filter Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tag === 'ALL'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 