// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  content?: string;
  slug: string;
  timestamp: string;
  tag: string;
  tagColor: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
  featured?: boolean;
  readingTime?: number;
  views?: number;
  author?: string;
  image?: string; // For SEO and social sharing
}

// Video types
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
  duration?: number; // in seconds
  publishedAt: string;
  views?: number;
  likes?: number;
  channel?: string;
  subscribers?: number;
  category?: string;
  tags?: string[];
  isLive?: boolean;
  analysis?: string; // Grok4.Live exclusive analysis
}

// Live update types
export interface LiveUpdate {
  id: string;
  timestamp: string;
  source: string;
  title: string;
  content: string;
  link?: string;
  type: 'tweet' | 'news' | 'blog' | 'video';
  engagement?: {
    likes?: number;
    retweets?: number;
    comments?: number;
  };
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'featured' | 'minimal';

export type TagColor = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'gray'; 