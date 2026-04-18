import type { APIRoute } from 'astro';
import { business } from '@data/business';
import { services } from '@data/services';
import { locations } from '@data/locations';
import { blogPosts } from '@data/blog';
import { content } from '@data/content';

export const GET: APIRoute = () => {
  const base = business.website;
  const lines: string[] = [
    `# ${business.name}`,
    ``,
    `> ${business.tagline}`,
    ``,
    `${business.name} is a professional ${business.niche} company based in ${business.address.city}, CA.`,
    `We serve ${business.serviceArea}.`,
    `Phone: ${business.phone} | Website: ${base}`,
    ``,
    `## Services`,
    ``,
    ...services.map(s => `- [${s.name}](${base}/services/${s.slug}): ${s.description}`),
    ``,
    `## Service Areas`,
    ``,
    ...locations.map(l => `- [${l.name}, CA](${base}/locations/${l.slug}): ${l.description}`),
    ``,
    `## About`,
    ``,
    ...content.about.body.map(p => p),
    ``,
    `## Blog Posts`,
    ``,
    ...blogPosts.map(p => `- [${p.title}](${base}/blog/${p.slug}) — ${p.excerpt}`),
    ``,
    `## Contact`,
    ``,
    `Call or text: ${business.phone}`,
    `Service area: ${business.serviceArea}`,
    `License: ${business.licenseNumber}`,
    ``,
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
