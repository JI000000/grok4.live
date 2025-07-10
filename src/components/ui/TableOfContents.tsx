'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0% -66%',
        threshold: 0,
      }
    );

    const headings = items.map(item => document.getElementById(item.id)).filter(Boolean);
    headings.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn('space-y-1', className)}>
      <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
        📑 TABLE OF CONTENTS
      </h3>
      
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                'block w-full text-left py-2 px-3 rounded-md text-sm transition-colors',
                'hover:bg-gray-800/50 hover:text-white',
                activeId === item.id
                  ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500'
                  : 'text-gray-400',
                item.level === 2 && 'pl-6',
                item.level === 3 && 'pl-9',
                item.level === 4 && 'pl-12'
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 