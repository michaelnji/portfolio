import { getPostsSummarized } from '../../lib/backend/posts'
const site = 'https://www.michaelnji.dev';
const pages: string[] = ['about', 'blog'];
const posts: { slug: string, lastMod: string | Date }[] = [];
const res = await getPostsSummarized();
res.posts.forEach((post) => {
    posts.push({ slug: post.slug.current, lastMod: post._updatedAt })
})





export async function GET() {
    const body = sitemap(pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
        .map(
            (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
        )
        .join('')}
  ${posts
        .map(
            (post) => `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.lastMod).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
        )
        .join('')}
</urlset>`;