import React from 'react';
import { cn } from '@/lib/utils';
import { formatDate, estimateReadingTime } from '@/lib/utils';
import { CalendarIcon, ClockIcon, EyeIcon, UserIcon } from '@heroicons/react/24/outline';
import type { Event } from '@/types';

interface ArticleLayoutProps {
  event: Event;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
  tldr?: string[];
}

export function ArticleLayout({ event, children, sidebar, className, tldr }: ArticleLayoutProps) {
  const readingTime = event.content ? estimateReadingTime(event.content) : event.readingTime || 5;

  return (
    <div className={cn('min-h-screen bg-black pt-20', className)}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-12">
              {/* Tag */}
              <div className="mb-6">
                <span className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border',
                  event.tagColor === 'red' && 'bg-red-500/10 text-red-400 border-red-500/30',
                  event.tagColor === 'blue' && 'bg-blue-500/10 text-blue-400 border-blue-500/30',
                  event.tagColor === 'yellow' && 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
                  event.tagColor === 'green' && 'bg-green-500/10 text-green-400 border-green-500/30',
                  event.tagColor === 'purple' && 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                )}>
                  ⚡ {event.tag}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
                {event.description}
              </p>

              {/* TL;DR Section */}
              {tldr && tldr.length > 0 && (
                <div className="bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-xl p-6 mb-8">
                  <h2 className="text-lg font-bold text-brand-400 mb-3 flex items-center gap-2">
                    💡 TL;DR - Key Takeaways
                  </h2>
                  <ul className="space-y-2 text-gray-300">
                    {tldr.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-brand-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-gray-800 pb-8">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{formatDate(event.timestamp)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
                
                {event.views && (
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    <span>{event.views.toLocaleString()} views</span>
                  </div>
                )}
                
                {event.author && (
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span>By {event.author}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose-dark max-w-none">
              {children}
            </div>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Last updated: {formatDate(event.timestamp)}
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="text-sm text-brand-400 hover:text-brand-300 transition-colors">
                    Share on Twitter
                  </button>
                  <button className="text-sm text-brand-400 hover:text-brand-300 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          {sidebar && (
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {sidebar}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
} 