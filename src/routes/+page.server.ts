import { getQuote } from '$lib/backend/quotes';
import type { Load } from '@sveltejs/kit';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPostsSummarized } from '../lib/backend/posts';
import { getUser } from '$lib/backend/github/user';
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
			handle: '@CodeD3vil',
			site: '@site',
			// cardType: 'summary_large_image',
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			image: `${new URL(url.origin).href}/images/myke.webp`,
			imageAlt: 'picture of Michael Nji'

		}

		}) satisfies MetaTagsProps;
		const githubUser = await getUser()
		
	const res = await getPostsSummarized();
	const quotes = await getQuote()
	if (res.status === 200 ) {
		
		return {
			pageMetaTags,
			posts: res.posts,
			quotes: quotes.data,
			githubUser
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: `Could not load url`
	};
};
