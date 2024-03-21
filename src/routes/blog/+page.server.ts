import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPostsSummarized } from '../../lib/backend/posts';
import { getTags } from '../../lib/backend/tags';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url }) => {
	const tag = url.search.split('?tag=')[1]

	const pageMetaTags = Object.freeze({
		title: 'Mykenji | Articles',
		description: 'I write articles from time to time',
		openGraph: {
			title: 'Mykenji | Articles',
			description: 'I write articles from time to time',
			images: [
				{
					url: `${new URL(url.pathname, url.origin).href}/images/myke.webp`,
					alt: 'A picture of Michael Nji',
					width: 800,
					height: 600,
					type: 'image/webp'
				}
			]
		}
	}) satisfies MetaTagsProps;
	
	const res = await getPostsSummarized();
	const tagRes = await getTags();
	if (res.status === 200 && tagRes.status === 200) {
		return {
			pageMetaTags,
			posts: res.posts,
			tags: tagRes.tags,
			activeTag: tag ?? 'all'
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: `Could not load url`
	};
};
