import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPost, getRelatedPosts } from '../../../lib/backend/posts';
import type { Load } from '@sveltejs/kit';
import { getTags } from '$lib/backend/tags';
import { urlFor } from '$lib/backend/sanity';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params, url }) => {
	const res = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);
	const tags = await getTags()
	console.log(`${new URL(url.origin).href}`)
	const pageMetaTags = Object.freeze({
		title: res.post?.title,
		description: res.post?.excerpt,
		openGraph: {
			title: res.post?.title,
			description: res.post?.excerpt,
			url: `${new URL(url.pathname, url.origin).href}`,
			type: 'article',
			article: {
				publishedTime: new Date(res.post?.publishedAt ?? Date.now()).toISOString(),
				modifiedTime: new Date(res.post?.publishedAt ?? Date.now()).toISOString(),
				// expirationTime: '2022-12-21T22:04:11Z',
				// section: 'Section II',
				// authors: [
				// 	`${new URL(url.origin).href}`
				// ],
				// tags: ['Tag A', 'Tag B', 'Tag C']
			},
			images: [
				{
					url: urlFor(res.post?.imageUrl).format('webp').size(1400, 700).url(),
					width: 1400,
					height: 700,
					// alt: 'Photo of text'
				}
			]
		},
		twitter: {
			handle: '@CodeD3vil',
			site: '@site',
		// cardType: 'summary_large_image',
			title: res.post?.title,
			description: res.post?.excerpt,
			image: urlFor(res.post?.imageUrl).format('webp').size(1400, 700).url(),
			// imageAlt: 'picture of Michael Nji'

		}
	}) satisfies MetaTagsProps;

	if (res.status === 200 && relatedPostsRes.status === 200 && tags.status === 200) {

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
