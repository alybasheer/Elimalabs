import type { MetadataRoute } from 'next';
import { projects, services, siteUrl } from './content';
export default function sitemap(): MetadataRoute.Sitemap {
    if (!siteUrl) return [];
    const origin = siteUrl.replace(/\/$/, '');
    const paths = ['/', '/services', '/work', '/about', '/contact',
        ...services.map(s => `/services/${s.slug}`),
        ...projects.map(p => `/work/${p.slug}`)];
    return paths.map(path => ({ url: `${origin}${path}` }));
}
