import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.for-the-block.com';
const DEFAULT_LAST_MOD = '2025-02-21';

const staticPaths: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}`,
    lastModified: DEFAULT_LAST_MOD,
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${BASE_URL}/quiz`,
    lastModified: DEFAULT_LAST_MOD,
    changeFrequency: 'monthly',
    priority: 1,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths,
    {
      url: `${BASE_URL}/information`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/chat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/poll`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
}
