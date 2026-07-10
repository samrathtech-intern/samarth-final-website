import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/services',
    '/iso-auditing-services',
    '/gallery',
    '/credentials',
    '/food-safety',
    '/team',
    '/contact'
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path === '/services' ? 0.9 : path === '/iso-auditing-services' ? 0.85 : 0.7
    })),
    ...services
      .filter((service) => service.slug)
      .map((service) => ({
        url: `${site.domain}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8
      }))
  ];
}
