import type { Video } from '@/types';

export const sampleVideos: Video[] = [
  {
    id: 'grok-4-announcement',
    title: 'Grok 4 Official Announcement: Revolutionary AI Safety Features',
    description: 'xAI reveals Grok 4 with groundbreaking Constitutional AI implementation and dual-brain architecture. Learn about the safety innovations born from the MechaHitler incident.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/7t8NgGlGIqg',
    duration: 720, // 12 minutes
    quality: ['720p', '1080p', '1440p'],
    subtitles: [
      { language: 'en', url: '/subtitles/grok-4-en.vtt', label: 'English' },
      { language: 'zh', url: '/subtitles/grok-4-zh.vtt', label: '中文' }
    ],
    publishedAt: '2025-07-10T14:00:00Z',
    updatedAt: '2025-07-10T14:00:00Z',
    category: 'BREAKING',
    tags: ['Grok 4', 'AI Safety', 'xAI', 'Constitutional AI', 'Tech News'],
    views: 125000,
    likes: 8400,
    shares: 1200,
    comments: 450,
    relatedArticles: ['grok-4-features-revealed', 'mechahitler-incident-timeline'],
    relatedVideos: ['ai-safety-explained', 'xai-roadmap-2025'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: true,
    featured: true,
    author: 'Grok4.Live News Team'
  },
  {
    id: 'mechahitler-deep-dive',
    title: 'The MechaHitler Incident: What Really Happened?',
    description: 'A comprehensive investigation into the AI safety failure that shocked the industry. Expert interviews, technical analysis, and timeline reconstruction.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/KqKuDwF_-Ys',
    duration: 1080, // 18 minutes
    quality: ['720p', '1080p'],
    subtitles: [
      { language: 'en', url: '/subtitles/mechahitler-en.vtt', label: 'English' }
    ],
    publishedAt: '2025-07-08T16:30:00Z',
    updatedAt: '2025-07-08T16:30:00Z',
    category: 'DEEP_DIVE',
    tags: ['AI Safety', 'Controversy', 'Analysis', 'MechaHitler', 'Ethics'],
    views: 89000,
    likes: 5600,
    shares: 890,
    comments: 320,
    relatedArticles: ['mechahitler-incident-timeline', 'grok-evolution-woke-to-anti-woke'],
    relatedVideos: ['ai-safety-explained', 'grok-4-announcement'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: true,
    featured: false,
    author: 'AI Safety Institute'
  },
  {
    id: 'ai-safety-explained',
    title: 'AI Safety Explained: Constitutional AI vs Traditional Training',
    description: 'Understanding the fundamental differences between Constitutional AI and traditional training methods. Why safety-first approaches are crucial for AI development.',
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/nNHBb_2hMWI',
    duration: 540, // 9 minutes
    quality: ['720p', '1080p'],
    subtitles: [
      { language: 'en', url: '/subtitles/ai-safety-en.vtt', label: 'English' },
      { language: 'zh', url: '/subtitles/ai-safety-zh.vtt', label: '中文' }
    ],
    publishedAt: '2025-07-06T10:00:00Z',
    updatedAt: '2025-07-06T10:00:00Z',
    category: 'ANALYSIS',
    tags: ['AI Safety', 'Constitutional AI', 'Education', 'Tech Explained'],
    views: 67000,
    likes: 4200,
    shares: 650,
    comments: 180,
    relatedArticles: ['grok-evolution-woke-to-anti-woke'],
    relatedVideos: ['grok-4-announcement', 'mechahitler-deep-dive'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: true,
    featured: false,
    author: 'Tech Educator'
  },
  {
    id: 'xai-roadmap-2025',
    title: 'xAI Roadmap 2025: What\'s Next After Grok 4?',
    description: 'Exclusive insights into xAI\'s development roadmap for 2025. From Grok 5 planning to enterprise AI solutions and safety research initiatives.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/ckDmRA6EeqY',
    duration: 960, // 16 minutes
    quality: ['720p', '1080p', '1440p'],
    subtitles: [
      { language: 'en', url: '/subtitles/xai-roadmap-en.vtt', label: 'English' }
    ],
    publishedAt: '2025-07-05T12:00:00Z',
    updatedAt: '2025-07-05T12:00:00Z',
    category: 'ANALYSIS',
    tags: ['xAI', 'Roadmap', 'Future Tech', 'Grok 5', 'Enterprise AI'],
    views: 45000,
    likes: 2800,
    shares: 420,
    comments: 95,
    relatedArticles: ['grok-4-features-revealed'],
    relatedVideos: ['grok-4-announcement', 'ai-safety-explained'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: true,
    featured: false,
    author: 'Industry Analyst'
  },
  {
    id: 'musk-interview-grok4',
    title: 'Exclusive: Elon Musk on Grok 4 and AI Safety Lessons',
    description: 'Rare interview with Elon Musk discussing the Grok 4 development process, lessons learned from the MechaHitler incident, and his vision for AI safety.',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/akXMYvKjUxM',
    duration: 1800, // 30 minutes
    quality: ['720p', '1080p', '1440p', '2160p'],
    subtitles: [
      { language: 'en', url: '/subtitles/musk-interview-en.vtt', label: 'English' },
      { language: 'zh', url: '/subtitles/musk-interview-zh.vtt', label: '中文' },
    ],
    publishedAt: '2025-07-09T20:00:00Z',
    updatedAt: '2025-07-09T20:00:00Z',
    category: 'INTERVIEW',
    tags: ['Elon Musk', 'Exclusive', 'AI Safety', 'xAI', 'Leadership'],
    views: 234000,
    likes: 18500,
    shares: 3200,
    comments: 850,
    relatedArticles: ['grok-4-features-revealed', 'mechahitler-incident-timeline'],
    relatedVideos: ['grok-4-announcement', 'mechahitler-deep-dive'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: false, // Exclusive content
    featured: true,
    author: 'Grok4.Live Exclusive'
  },
  {
    id: 'competitors-react-grok4',
    title: 'How AI Competitors Are Reacting to Grok 4',
    description: 'Analysis of responses from OpenAI, Anthropic, Google, and Meta to Grok 4\'s Constitutional AI approach. What this means for the AI industry.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    embedUrl: 'https://www.youtube.com/embed/MxYSDl62POs',
    duration: 660, // 11 minutes
    quality: ['720p', '1080p'],
    subtitles: [
      { language: 'en', url: '/subtitles/competitors-react-en.vtt', label: 'English' }
    ],
    publishedAt: '2025-07-07T14:30:00Z',
    updatedAt: '2025-07-07T14:30:00Z',
    category: 'ANALYSIS',
    tags: ['Competition', 'Industry Analysis', 'OpenAI', 'Anthropic', 'Google'],
    views: 52000,
    likes: 3100,
    shares: 480,
    comments: 140,
    relatedArticles: ['grok-4-features-revealed'],
    relatedVideos: ['grok-4-announcement', 'ai-safety-explained'],
    isPublic: true,
    allowComments: true,
    allowEmbedding: true,
    featured: false,
    author: 'Market Watch AI'
  }
];

// Featured videos for homepage
export const featuredVideos = sampleVideos.filter(video => video.featured);

// Videos by category
export const videosByCategory = {
  BREAKING: sampleVideos.filter(video => video.category === 'BREAKING'),
  ANALYSIS: sampleVideos.filter(video => video.category === 'ANALYSIS'),
  DEEP_DIVE: sampleVideos.filter(video => video.category === 'DEEP_DIVE'),
  INTERVIEW: sampleVideos.filter(video => video.category === 'INTERVIEW'),
  TUTORIAL: sampleVideos.filter(video => video.category === 'TUTORIAL'),
  NEWS: sampleVideos.filter(video => video.category === 'NEWS')
};

// Recent videos (last 7 days)
export const recentVideos = sampleVideos
  .filter(video => {
    const publishDate = new Date(video.publishedAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return publishDate > weekAgo;
  })
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

// Popular videos (sorted by views)
export const popularVideos = sampleVideos
  .sort((a, b) => b.views - a.views)
  .slice(0, 6); 