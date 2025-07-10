import { MetadataRoute } from 'next';

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
      priority: 0.7,
    },
  ];

  // Featured articles
  const articles = [
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

  return [...staticPages, ...articles];
} 