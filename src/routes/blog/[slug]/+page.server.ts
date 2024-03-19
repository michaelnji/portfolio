import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPost, getRelatedPosts } from '../../../lib/backend/posts';
import type { Load } from '@sveltejs/kit';
import { getTags } from '$lib/backend/tags';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params }) => {
	const res = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);
	const tags = await getTags()
	const pageMetaTags = Object.freeze({
		title: 'Ooops',
		description: 'An error occured',
		openGraph: {
			title: 'Ooops',
			description: 'An error occured'
		}
	}) satisfies MetaTagsProps;

	if (res.status === 200 && relatedPostsRes.status === 200 && tags.status === 200) {
		const pageMetaTags = Object.freeze({
			title: res.post?.title,
			description: res.post?.excerpt,
			openGraph: {
				title: res.post?.title,
				description: res.post?.excerpt
			}
		}) satisfies MetaTagsProps;
		let post = res.post;
		return {
			post,
			toc: res.toc,
			relatedPosts: relatedPostsRes.posts,
			pageMetaTags,
			tags
		};
	}

	return {
		status: 500,
		error:`Could not load url`,
		pageMetaTags
	};
};
