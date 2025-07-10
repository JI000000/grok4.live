import React from 'react';
import { cn } from '@/lib/utils';
import type { CardVariant } from '@/types';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  children: React.ReactNode;
}

const cardVariants = {
  default: 'bg-gray-900/80 border-gray-800',
  featured: 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-brand-500/30',
  minimal: 'bg-gray-950/50 border-gray-800/50',
};

export function Card({
  variant = 'default',
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300',
        cardVariants[variant],
        hover && 'hover:border-brand-500/50 hover:shadow-glow hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  timestamp: string;
  tag: string;
  tagColor?: 'blue' | 'red' | 'green' | 'yellow';
  featured?: boolean;
  onClick?: () => void;
}

export function EventCard({
  title,
  description,
  timestamp,
  tag,
  tagColor = 'blue',
  featured = false,
  onClick,
}: EventCardProps) {
  const tagColors = {
    blue: 'bg-primary-blue/20 text-primary-blue border-primary-blue/30',
    red: 'bg-error/20 text-error border-error/30',
    green: 'bg-success/20 text-success border-success/30',
    yellow: 'bg-warning/20 text-warning border-warning/30',
  };

  return (
    <Card
      variant={featured ? 'featured' : 'default'}
      className={cn(
        'cursor-pointer group',
        onClick && 'hover:scale-[1.02]'
      )}
      onClick={onClick}
    >
      <div className="space-y-4">
        {/* Tag and timestamp */}
        <div className="flex items-center justify-between">
          <span className={cn(
            'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border',
            tagColors[tagColor]
          )}>
            ⚡ {tag}
          </span>
          <time className="text-xs text-text-tertiary">
            {timestamp}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-h4 font-semibold text-text-primary group-hover:text-gradient transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Read more */}
        <div className="flex items-center text-primary-blue text-sm font-medium group-hover:translate-x-1 transition-transform">
          READ FULL STORY →
        </div>
      </div>
    </Card>
  );
} 