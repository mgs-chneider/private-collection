import { MetadataRoute } from 'next';
import { pieces } from '@/lib/pieces';
import { toSlug } from '@/lib/slugs';

export default function sitemap(): MetadataRoute.Sitemap {
  const pieceUrls = pieces.map((p) => ({
    url: `https://www.privat-besitz.de/stueck/${toSlug(p.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.privat-besitz.de',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...pieceUrls,
  ];
}
