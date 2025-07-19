'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { formatRelativeTime } from '@/lib/utils';
import type { Event, TagColor } from '@/types';
import { Card } from './Card';

interface EventCardProps {
  event: Partial<Event>;
  onClick?: () => void;
  className?: string;
}

const tagColors: Record<TagColor, string> = {
  red: 'bg-red-500/10 text-red-400 border-red-500/30',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
};

const tagIcons: Record<string, string> = {
  BREAKING: '⚡',
  ANALYSIS: '📊',
  INVESTIGATION: '🔍',
  DEVELOPER: '💻',
  UPDATE: '📝',
  VIDEO: '🎥',
  OFFICIAL: '🏢',
};

export function EventCard({ event, onClick, className }: EventCardProps) {
  const {
    title,
    description,
    timestamp,
    tag,
    tagColor = 'blue',
    featured = false,
    views,
    readingTime,
    slug,
  } = event;

  const cardContent = (
    <Card
      variant={featured ? 'featured' : 'default'}
      className={cn(
        'cursor-pointer group',
        featured && 'col-span-full lg:col-span-2',
        className
      )}
      onClick={onClick}
    >
      {/* Tag */}
      {tag && (
        <div className="flex items-center gap-2 mb-4">
          <span
            className={cn(
              'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border',
              tagColors[tagColor as TagColor]
            )}
          >
            {tagIcons[tag] && <span>{tagIcons[tag]}</span>}
            {tag}
          </span>
          {featured && (
            <span className="text-xs text-brand-400 font-medium">FEATURED</span>
          )}
        </div>
      )}

      {/* Title */}
      <h3
        className={cn(
          'font-bold text-white mb-3 group-hover:text-brand-300 transition-colors',
          featured ? 'text-2xl' : 'text-xl'
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          'text-gray-300 mb-4 leading-relaxed',
          featured ? 'text-base' : 'text-sm line-clamp-3'
        )}
      >
        {description}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-4">
          {timestamp && (
            <span>{formatRelativeTime(timestamp)}</span>
          )}
          {readingTime && (
            <span>{readingTime} min read</span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {views && (
            <span>{views.toLocaleString()} views</span>
          )}
          <span className="text-brand-400 group-hover:text-brand-300 transition-colors">
            READ FULL STORY →
          </span>
        </div>
              </div>
      </Card>
    );

  // 如果有slug，使用Link包装，否则直接返回卡片内容
  if (slug) {
    return (
      <Link href={`/events/${slug}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
} 