import type { APIRoute } from 'astro';
import { business } from '@data/business';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${business.website}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
