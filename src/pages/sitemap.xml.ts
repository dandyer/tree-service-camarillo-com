import type { APIRoute } from 'astro';
import { business } from '@data/business';
import { services } from '@data/services';
import { locations } from '@data/locations';
import { blogPosts } from '@data/blog';

export const GET: APIRoute = () => {
  const base = business.website;
  const pages = [
    { url: base, priority: '1.0', changefreq: 'weekly' },
    { url: `${base}/about`, priority: '0.7', changefreq: 'monthly' },
    { url: `${base}/services`, priority: '0.8', changefreq: 'monthly' },
    { url: `${base}/locations`, priority: '0.8', changefreq: 'monthly' },
    { url: `${base}/blog`, priority: '0.7', changefreq: 'weekly' },
    ...services.map(s => ({ url: `${base}/services/${s.slug}`, priority: '0.9', changefreq: 'monthly' })),
    ...locations.map(l => ({ url: `${base}/locations/${l.slug}`, priority: '0.9', changefreq: 'monthly' })),
    ...blogPosts.map(p => ({ url: `${base}/blog/${p.slug}`, priority: '0.6', changefreq: 'yearly' })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
