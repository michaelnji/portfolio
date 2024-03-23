import type { Heading, Post, PostResponse, PostsSummarizedResponse } from '../types';
import { compareTags, findHeadings } from '../utils';
import { queries } from '../utils/queryManager';
import { sanityClient } from './sanity';

export async function getPostsSummarized(): Promise<PostsSummarizedResponse> {
	const query = queries.postsSummary;
	try {

		const data: Post[] = await sanityClient.fetch(query);
		if (data) {
			return {
				posts: data,
				status: 200,
				message: 'success'
			};
		}
		return {
			posts: [],
			status: 500,
			message: 'Internal Server Error'
		};
	} catch (error) {
		return {
			posts: [],
			status: 500,
			message: 'Internal Server Error'
		};
	}
}
export async function getRelatedPosts(slug: string | undefined): Promise<PostsSummarizedResponse> {
	const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc) [0..10]{_id, "authorInfo":author-> {slug,name,bio,twitter,"imageUrl":image.asset->url}, "tags":categories[]->{title,description},excerpt, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url}`;
	try {
		const data = await sanityClient.fetch(query);
		const post = await getPost(slug)
		if (data && post) {
			let filteredPosts: any[] = []
			data.forEach((element: { tags: any; }, i: number) => {
				if (compareTags(post.post?.tags, element.tags) && i < 4) filteredPosts.push(data[i])
			});
			return {
				status: 200,
				message: 'success',
				posts: filteredPosts
			};
		}
		return {
			posts: [],
			status: 500,
			message: 'Internal Server error'
		};
	} catch (error) {
		return {
			status: 500,
			posts: [],
			message: 'Internal Server error'
		};
	}
}
export async function getPost(slug: string | undefined): Promise<PostResponse> {
	const query = `*[_type == "post" && slug.current == "${slug}"]{_id,body, "authorInfo":author-> {slug,name,bio,twitter,"imageUrl":image.asset->url}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url, "tableOfContents": content[style in ["h2", "h3"]]}`;
	try {
		const data = await sanityClient.fetch(query);

		const toc: Heading[] = findHeadings(data[0].body);
		if (data && toc) {
			return {
				toc,
				post: data[0],
				status: 200,
				message: 'success'
			};
		}
		return {
			toc: undefined,
			post: undefined,
			status: 500,
			message: 'Internal Server error'
		};
	} catch (error) {
		return {
			toc: undefined,
			post: undefined,
			status: 500,
			message: 'Internal Server error'
		};
	}
}
