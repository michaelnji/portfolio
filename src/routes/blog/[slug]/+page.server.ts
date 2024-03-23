import { urlFor } from '$lib/backend/sanity';
import { getTags } from '$lib/backend/tags';
import { getOrCreatePostMetaData, updatePostMetadata } from '$lib/server/upstash/handlers';
import type { Load } from '@sveltejs/kit';
import { isArray } from 'mathjs';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { getPost, getRelatedPosts } from '../../../lib/backend/posts';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params, url }) => {
	const res = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);
	const tags = await getTags()
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
		const postMetaData = await getOrCreatePostMetaData(`${post?._id}`, {
			id: `${post?._id}`, views: 0, reactions: {
				hearts: 0,
				shit: 0,
				claps: 0
			}
		})
		console.log(postMetaData)
		if (!isArray(postMetaData.data) && postMetaData.data !== null) {
			let newData = {
				reactions: postMetaData.data?.reactions ?? { hearts: 0, shit: 0, claps: 0 },
				id: postMetaData.data?.id ?? `${post?._id}`,
				views: postMetaData.data?.views ? postMetaData.data?.views + 1 : 1
			}
			const finalMetaInfo = await updatePostMetadata(newData, `${post?._id}`)
			console.log(finalMetaInfo)
			return {
				post,
				toc: res.toc,
				relatedPosts: relatedPostsRes.posts,
				pageMetaTags,
				tags,
				meta_data: finalMetaInfo.data
			};
		}
		return {
			post,
			toc: res.toc,
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
