import { urlFor } from '$lib/backend/sanity';
import { getTags } from '$lib/backend/tags';
import { getOrCreatePostMetaData, updatePostMetadata } from '$lib/server/upstash/handlers';
import type { Load } from '@sveltejs/kit';
import { isArray } from 'mathjs';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPost, getRelatedPosts } from '../../../lib/backend/posts';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params, url }) => {
	const response = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);
	const tags = await getTags()
	const pageMetaTags = Object.freeze({
		title: response.post?.title,
		description: response.post?.excerpt,
		openGraph: {
			title: response.post?.title,
			description: response.post?.excerpt,
			url: `${new URL(url.pathname, url.origin).href}`,
			type: 'article',
			article: {
				publishedTime: new Date(response.post?.publishedAt ?? Date.now()).toISOString(),
				modifiedTime: new Date(response.post?.publishedAt ?? Date.now()).toISOString(),
			},
			images: [
				{
					url: urlFor(response.post?.imageUrl).format('webp').size(1400, 700).url(),
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
			title: response.post?.title,
			description: response.post?.excerpt,
			image: urlFor(response.post?.imageUrl).format('webp').size(1400, 700).url(),
			// imageAlt: 'picture of Michael Nji'

		}
	}) satisfies MetaTagsProps;

	if (response.status === 200 && relatedPostsRes.status === 200 && tags.status === 200) {

		let post = response.post;
		const viewsAndReactions = await getOrCreatePostMetaData(`${post?._id}`, {
			id: `${post?._id}`, views: 0, reactions: {
				hearts: 0,
				shit: 0,
				claps: 0
			}
		})

		if (!isArray(viewsAndReactions.data) && viewsAndReactions.data !== null) {
			let newData = {
				reactions: viewsAndReactions.data?.reactions ?? { hearts: 0, shit: 0, claps: 0 },
				id: viewsAndReactions.data?.id ?? `${post?._id}`,
				views: viewsAndReactions.data?.views ? viewsAndReactions.data?.views + 1 : 1
			}
			const finalMetaInfo = await updatePostMetadata(newData, `${post?._id}`)

			return {
				post,
				toc: response.toc,
				relatedPosts: relatedPostsRes.posts,
				pageMetaTags,
				tags,
				meta_data: finalMetaInfo.data
			};
		}
		return {
			post,
			toc: response.toc,
			relatedPosts: relatedPostsRes.posts,
			pageMetaTags,
			tags,
			meta_data: null
		};
	}

	return {
		status: 500,
		error:`Could not load url`,
		pageMetaTags
	};
};
