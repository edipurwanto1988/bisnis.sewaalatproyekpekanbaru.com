import { articles } from '../data/articles';

const site = 'https://bisnis.sewaalatproyekpekanbaru.com';

export function GET() {
  const urls = [
    { loc: `${site}/` },
    { loc: `${site}/artikel/` },
    ...articles.map((article) => ({
      loc: `${site}/artikel/${article.slug}/`,
      lastmod: article.publishedDate
    }))
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((url) => `  <url><loc>${url.loc}</loc>${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}</url>`)
      .join('\n')}\n</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
