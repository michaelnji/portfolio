import type { Load } from '@sveltejs/kit';
import { getPostsSummarized } from '../lib/backend/posts';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { getQuote } from '$lib/backend/quotes';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async () => {
	const pageMetaTags = Object.freeze({
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			openGraph: {
				title: 'Michael Nji',
				description: 'Welcome to my personal website'
			}
		}) satisfies MetaTagsProps;
	const res = await getPostsSummarized();
	const quotes = await getQuote()
	if (res.status === 200 ) {
		
		return {
			pageMetaTags,
			posts: res.posts,
			quotes: quotes.data
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: `Could not load url`
	};
};
