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

// Video related types
export type VideoCategory = 'ANALYSIS' | 'BREAKING' | 'INTERVIEW' | 'DEEP_DIVE' | 'TUTORIAL' | 'NEWS';

export type VideoQuality = '720p' | '1080p' | '1440p' | '2160p';

export interface Subtitle {
  language: string;
  url: string;
  label: string;
}

// Video types
  export interface Video {
  // 基础信息
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  
  // 媒体信息
  embedUrl: string;           // 嵌入链接
  duration: number;           // 时长(秒)
  quality: VideoQuality[];    // 可用画质
  subtitles: Subtitle[];      // 字幕轨道
  
  // 元数据
  publishedAt: string;
  updatedAt: string;
  category: VideoCategory;
  tags: string[];
  
  // 统计数据
  views: number;
  likes: number;
  shares: number;
  comments: number;
  
  // 关联数据
  relatedArticles: string[];  // 相关文章ID
  relatedVideos: string[];    // 相关视频ID
  playlist?: string;          // 所属播放列表
  
  // 设置选项
  isPublic: boolean;
  allowComments: boolean;
  allowEmbedding: boolean;
  
  // 显示属性
  featured?: boolean;         // 是否为精选视频
  author: string;            // 作者
}

export interface VideoInteraction {
  userId: string;
  videoId: string;
  action: 'view' | 'like' | 'share' | 'comment' | 'watch_complete';
  timestamp: string;
  metadata?: {
    watchDuration?: number;    // 观看时长
    completionRate?: number;   // 完成率
    deviceType?: string;       // 设备类型
    referrer?: string;         // 来源页面
  };
}

export interface VideoView {
  videoId: string;
  timestamp: string;
  duration: number;
  completionRate: number;
}

export interface UserPreferences {
  favoriteCategories: VideoCategory[];
  autoplay: boolean;
  quality: VideoQuality;
  subtitles: boolean;
}

export interface ProgressData {
  currentTime: number;
  duration: number;
  buffered: number;
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