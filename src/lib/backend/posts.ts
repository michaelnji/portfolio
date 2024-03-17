import type { Heading, Post, PostResponse, PostsSummarizedResponse } from '../types';
import { findHeadings } from '../utils';
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
			message: new Error('Internal Server Error')
		};
	} catch (error) {
		return {
			posts: [],
			status: 500,
			message: new Error('Internal Server Error')
		};
	}
}
export async function getRelatedPosts(slug: string | undefined): Promise<PostsSummarizedResponse> {
	const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc, _updatedAt desc) | order( _updatedAt desc)[0..1]{_id, "authorInfo":author-> {slug,name,bio,twitter,"imageUrl":image.asset->url}, "tags":categories[]->{title,description},excerpt, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url}`;
	try {
		const data = await sanityClient.fetch(query);
		if (data) {
			return {
				status: 200,
				message: 'success',
				posts: data
			};
		}
		return {
			posts: [],
			status: 500,
			message: new Error('Internal Server error')
		};
	} catch (error) {
		return {
			status: 500,
			posts: [],
			message: new Error('Internal Server error')
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
			message: new Error('Internal Server error')
		};
	} catch (error) {
		return {
			toc: undefined,
			post: undefined,
			status: 500,
			message: new Error('Internal Server error')
		};
	}
}
