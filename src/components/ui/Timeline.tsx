import React from 'react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

interface TimelineItem {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  type?: 'major' | 'minor' | 'highlight';
  source?: string;
  link?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const typeStyles = {
  major: 'bg-brand-500 border-brand-400',
  minor: 'bg-gray-600 border-gray-500',
  highlight: 'bg-purple-500 border-purple-400',
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline Line */}
      <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-gray-700 to-transparent" />
      
      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.id} className="relative pl-12">
            {/* Timeline Dot */}
            <div
              className={cn(
                'absolute -left-[7px] top-2 w-4 h-4 rounded-full border-2 border-black',
                typeStyles[item.type || 'minor']
              )}
            />
            
            {/* Content */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <time className="text-sm text-brand-400 font-medium">
                    {formatDate(item.timestamp)}
                  </time>
                  {item.source && (
                    <div className="text-xs text-gray-500 mt-1">
                      Source: {item.source}
                    </div>
                  )}
                </div>
                
                {item.type === 'highlight' && (
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/30">
                    KEY EVENT
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
              
              {/* Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Read more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 