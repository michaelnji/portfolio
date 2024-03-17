import { getTags } from '$lib/backend/tags';
import { describe, expectTypeOf, test } from 'vitest';
import { getPostsSummarized } from '../src/lib/backend/posts';
import type { PostsSummarizedResponse, TagResponse } from '../src/lib/types';
describe('type checking for backend functions', async () => {
	const data = await getPostsSummarized();
	test('Types for summarized posts are returned properly', () => {
		expectTypeOf(data).toMatchTypeOf<PostsSummarizedResponse>();
	});
	const tags = await getTags();
	test('Types for tags are returned properly', () => {
		expectTypeOf(tags).toMatchTypeOf<TagResponse>();
	});
});
