import { urlFor } from "$lib/backend/sanity";
import { getTags } from "$lib/backend/tags";
import {
	getOrCreatePostStats,
	updatePostStats,
} from "$lib/server/database/queryHandlers";
import type { Load } from "@sveltejs/kit";
import type { MetaTagsProps } from "svelte-meta-tags";
import { getPost, getRelatedPosts } from "../../../lib/backend/posts";
import { isArray } from "mathjs";

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params, url }) => {
	const response = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);
	const tags = await getTags();
	const pageMetaTags = Object.freeze({
		title: response.post?.title,
		description: response.post?.excerpt,
		openGraph: {
			title: response.post?.title,
			description: response.post?.excerpt,
			url: `${new URL(url.pathname, url.origin).href}`,
			type: "article",
			article: {
				publishedTime: new Date(
					response.post?.publishedAt ?? Date.now(),
				).toISOString(),
				modifiedTime: new Date(
					response.post?.publishedAt ?? Date.now(),
				).toISOString(),
			},
			images: [
				{
					url: urlFor(response.post?.imageUrl)
						.format("webp")
						.size(1400, 700)
						.url(),
					width: 1400,
					height: 700,
					// alt: 'Photo of text'
				},
			],
		},
		twitter: {
			handle: "@CodeD3vil",
			site: "@site",
			// cardType: 'summary_large_image',
			title: response.post?.title,
			description: response.post?.excerpt,
			image: urlFor(response.post?.imageUrl)
				.format("webp")
				.size(1400, 700)
				.url(),
			// imageAlt: 'picture of Michael Nji'
		},
	}) satisfies MetaTagsProps;

	if (
		response.status === 200 &&
		relatedPostsRes.status === 200 &&
		tags.status === 200 &&
		response.post
	) {
		const post = response.post;
		// await createPostStatsTable()
		const postStat = await getOrCreatePostStats(`${post._id}`, {
			postId: `${post._id}`,
			views: 0,
			hearts: 0,
			claps: 0,
		});

		if (
			postStat?.data &&
			postStat.data !== undefined &&
			!isArray(postStat.data)
		) {
			postStat.data.views = postStat.data.views + 1;
			const updatedPost = await updatePostStats(
				postStat?.data?.postId,
				postStat?.data,
			);
			return {
				post,
				toc: response.toc,
				relatedPosts: relatedPostsRes.posts,
				pageMetaTags,
				tags,
				meta_data: updatedPost?.data,
			};
		}
		return {
			post,
			toc: response.toc,
			relatedPosts: relatedPostsRes.posts,
			pageMetaTags,
			tags,
			meta_data: postStat?.data,
		};
	}

	return {
		status: 500,
		error: "Could not load url",
		pageMetaTags,
	};
};
