import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPostsSummarized } from '../../lib/backend/posts';
import { getTags } from '../../lib/backend/tags';
import type { Load } from '@sveltejs/kit';

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
	const tagRes = await getTags();
	if (res.status === 200 && tagRes.status === 200) {
		const pageMetaTags = Object.freeze({
			title: 'Mykenji | Articles',
			description: 'I write articles from time to time',
			openGraph: {
				title: 'Mykenji | Articles',
				description: 'I write articles from time to time'
			}
		}) satisfies MetaTagsProps;
		return {
			pageMetaTags,
			posts: res.posts,
			tags: tagRes.tags
		};
	}

	return {
		pageMetaTags,
		status: 500,
		error: new Error(`Could not load url`)
	};
};
