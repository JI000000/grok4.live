import { MetadataRoute } from 'next';
import { sampleVideos } from '@/content/videos/sample-videos';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grok4.live';
  const lastModified = new Date('2025-07-10');

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Featured articles/events
  const articles = [
    {
      url: `${baseUrl}/events/grok4-vs-chatgpt-comparison-2025`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events/grok4-api-pricing-guide`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events/grok4-benchmark-performance-2025`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events/mechahitler-incident-timeline`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events/grok-4-features-revealed`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events/grok-evolution-woke-to-anti-woke`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Video pages - 为每个视频生成sitemap条目
  const videoPages = sampleVideos.map(video => ({
    url: `${baseUrl}/videos/${video.id}`,
    lastModified: new Date(video.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: video.featured ? 0.8 : 0.7,
  }));

  return [...staticPages, ...articles, ...videoPages];
} 