import type { TagResponse } from '../types';
import { queries } from '../utils/queryManager';
import { sanityClient } from './sanity';

export async function getTags(): Promise<TagResponse> {
	const query = queries.tags;
	try {
		const data = await sanityClient.fetch(query);

		if (data) {
			return {
				status: 200,
				message: 'succes',
				tags: data
			};
		}
		return {
			status: 500,
			message: new Error('Internal Server Error'),
			tags: undefined
		};
	} catch (error) {
		return {
			status: 500,
			message: new Error('Internal Server Error'),
			tags: undefined
		};
	}
}
