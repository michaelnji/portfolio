import { getPostsSummarized } from '../../lib/backend/posts'
import type { Post } from '../../lib/types';
import { json } from '@sveltejs/kit';

const website = "https://www.michaelnji.dev"
const feedTitle = 'Michael Nji - Blog';
const feedDescription = 'Thoughts, learnings, and updates from Michael Nji.';
const feedLink = "https://www.michaelnji.dev";
// Feed is rendered at build time
const feedUpdated = new Date();
export const GET = async () => {
    const res = await getPostsSummarized();

    const body = render(res.posts);
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    };
    return new Response(body, {

        headers,
    });
};

const render = (posts: Post[]) => {
    if (posts) {
        return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${feedTitle}</title>
    <link href="${feedLink}/rss.xml" rel="self"/>
    <link href="${feedLink}"/>
    <id>${feedLink}/</id>
    <updated>${feedUpdated.toISOString()}</updated>
    <author>
      <name>Michael Nji</name>
    </author>
    <subtitle>${feedDescription}</subtitle>
    <generator>JavaScript</generator>
${posts.map(
            (post: Post) =>
                `    <entry>
        <title>${post.title}</title>
        <link href="${website}/blog/${post.slug.current}/"/>
        <id>${website}/blog/${post.slug.current}/</id>
        <updated>${new Date(post._updatedAt).toISOString()}</updated>
        <published>${new Date(post.publishedAt).toISOString()}</published>
      </entry>`
        ).join('\n')}
</feed>`
    }
    else return null
};