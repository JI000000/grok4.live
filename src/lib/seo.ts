import type { Metadata } from 'next';
import type { Event, Video } from '@/types';

const baseUrl = 'https://grok4.live';
const siteName = 'Grok4.Live';

export function generateEventMetadata(event: Event): Metadata {
  const title = `${event.title} | ${siteName}`;
  const description = event.description.length > 160 
    ? `${event.description.substring(0, 157)}...` 
    : event.description;
  
  const url = `${baseUrl}/events/${event.slug}`;
  const imageUrl = event.image || `${baseUrl}/og-event-default.png`;

  return {
    title,
    description,
    keywords: [
      'Grok AI',
      'xAI',
      event.tag.toLowerCase(),
      ...event.title.toLowerCase().split(' ').filter(word => word.length > 3),
      'AI analysis',
      'artificial intelligence',
      'machine learning'
    ],
    
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: event.title,
        }
      ],
      publishedTime: event.timestamp,
      modifiedTime: event.timestamp,
      authors: [event.author || 'Grok4.Live Editorial Team'],
      section: 'Technology',
      tags: [event.tag, 'Grok AI', 'xAI', 'AI Safety'],
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@grok4live',
      creator: '@grok4live',
      title,
      description,
      images: [imageUrl],
    },
    
    alternates: {
      canonical: url,
    },
    
    other: {
      'article:author': event.author || 'Grok4.Live Editorial Team',
      'article:published_time': event.timestamp,
      'article:modified_time': event.timestamp,
      'article:section': 'Technology',
      'article:tag': event.tag,
    },
  };
}

export function generateVideoMetadata(video: Video): Metadata {
  const title = `${video.title} | ${siteName}`;
  const description = video.description.length > 160 
    ? `${video.description.substring(0, 157)}...` 
    : video.description;
  
  const url = `${baseUrl}/videos/${video.id}`;
  const imageUrl = video.thumbnail || `${baseUrl}/og-video-default.png`;

  return {
    title,
    description,
    keywords: [
      'Grok AI video',
      'xAI content',
      video.category?.toLowerCase() || '',
      ...(video.tags || []),
      'AI analysis video',
      'artificial intelligence'
    ],
    
    openGraph: {
      type: 'video.other',
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: video.title,
        }
      ],
      videos: [
        {
          url: video.url,
          type: 'video/mp4',
          width: 1920,
          height: 1080,
        }
      ],
    },
    
    twitter: {
      card: 'player',
      site: '@grok4live',
      creator: '@grok4live',
      title,
      description,
      images: [imageUrl],
      players: [
        {
          playerUrl: video.url,
          streamUrl: video.url,
          width: 1920,
          height: 1080,
        }
      ],
    },
    
    alternates: {
      canonical: url,
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = `${baseUrl}${path}`;
  const imageUrl = image || `${baseUrl}/og-default.png`;

  return {
    title: fullTitle,
    description,
    
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@grok4live',
      creator: '@grok4live',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    
    alternates: {
      canonical: url,
    },
  };
}

// Generate structured data for articles
export function generateArticleStructuredData(event: Event) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": event.title,
    "description": event.description,
    "image": event.image || `${baseUrl}/og-event-default.png`,
    "datePublished": event.timestamp,
    "dateModified": event.timestamp,
    "author": {
      "@type": "Organization",
      "name": event.author || "Grok4.Live Editorial Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/events/${event.slug}`
    },
    "articleSection": "Technology",
    "keywords": [event.tag, "Grok AI", "xAI", "AI Safety"],
    "about": {
      "@type": "Thing",
      "name": "Grok AI",
      "description": "Advanced language model by xAI"
    }
  };
}

// Generate structured data for videos
export function generateVideoStructuredData(video: Video) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": video.thumbnail,
    "uploadDate": video.publishedAt,
    "contentUrl": video.url,
    "embedUrl": video.url,
    "duration": video.duration ? `PT${video.duration}S` : undefined,
    "interactionStatistic": video.views ? {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": video.views
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": baseUrl
    }
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// SEO utility functions
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function generateKeywords(baseKeywords: string[], content: string): string[] {
  const contentWords = content.toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 4 && !/[^a-zA-Z]/.test(word))
    .slice(0, 5);
  
  return [...baseKeywords, ...contentWords];
}

export function getCanonicalUrl(path: string): string {
  return `${baseUrl}${path}`;
} 