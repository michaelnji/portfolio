import type { Load } from '@sveltejs/kit';
import { getPostsSummarized } from '../lib/backend/posts';
import type { MetaTagsProps } from 'svelte-meta-tags';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async () => {
	const pageMetaTags = Object.freeze({
		title: 'Ooops',
		description: 'An error occured',
		openGraph: {
			title: 'Ooops',
			description: 'An error occured'
		}
	}) satisfies MetaTagsProps;
	const res = await getPostsSummarized();
	if (res.status === 200) {
		const pageMetaTags = Object.freeze({
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			openGraph: {
				title: 'Michael Nji',
				description: 'Welcome to my personal website'
			}
		}) satisfies MetaTagsProps;
		return {
			pageMetaTags,
			posts: res.posts
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: new Error(`Could not load url`)
	};
};
