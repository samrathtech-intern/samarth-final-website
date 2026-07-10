import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/team', '/credentials', '/food-safety', '/gallery', '/services', '/contact'];
  return [
    ...pages.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7
    })),
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
