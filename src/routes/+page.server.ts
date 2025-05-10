import { getQuote } from '$lib/backend/quotes';
import { getPostStats } from "$lib/server/database/queryHandlers";
import type { Load } from '@sveltejs/kit';
import { isArray } from "mathjs";
import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPostsSummarized } from '../lib/backend/posts';
/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url }) => {
	const pageMetaTags = Object.freeze({
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			openGraph: {
				title: 'Michael Nji',
			description: 'Welcome to my personal website',
			images: [
				{
					url: `${new URL(url.origin).href}/images/myke.webp`,
					alt: 'A picture of Michael Nji',
					width: 800,
					height: 600,
					type: 'image/webp'
				}
			]
		},
		twitter: {
			handle: '@heisgtr',
			site: '@site',
			// cardType: 'summary_large_image',
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			image: `${new URL(url.origin).href}/images/myke.webp`,
			imageAlt: 'picture of Michael Nji'

		}

	}) satisfies MetaTagsProps;
		
	const res = await getPostsSummarized();
	const quotes = await getQuote()
	if (res.status === 200 ) {
		const posts = res.posts;
		for (let index = 0; index < posts.length; index++) {
			const post = posts[index];
			const views = await getPostStats(post._id.toString());
			console.log(views);
			if (views.status === 200 && !isArray(views.data)) {
				posts[index].views = views.data?.views;
			} else {
				posts[index].views = null;
			}
		}

		return {
			pageMetaTags,
			posts: posts,
			quotes: quotes.data,
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: "Could not load url",
	};
};
