export type ClipboardCopyResult = 'success' | 'error' | 'not-supported';

export interface Post {
	_id: string | number;
	excerpt: string;
	authorInfo: {
		slug: string;
		name: string;
		bio: string;
		imageUrl: string;
		twitter: string;
	};
	tags: { title: string; description: string }[];
	publishedAt: Date | string;
	slug: string;
	title: string;
	_updatedAt: Date | string;
	imageUrl: string;
	body: any;
}
export interface PostsSummarizedResponse {
	posts: Post[];
	status: number;
	message: Error | string;
}

export type Heading = {
	_key: string;
	markDefs: any[];
	children: any[];
	_type: 'block';
	style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	text: string;
	slug: string;
};
export interface PostResponse {
	post: Post | undefined;
	status: number;
	message: Error | string;
	toc: Heading[] | undefined;
}

export type Tag = {
	_type: 'category';
	description?: string;
	_id: string;
	title: string;
	_updatedAt: Date | string;
	_createdAt: Date | string;
	_rev: string;
};

export interface TagResponse {
	tags: Tag[] | undefined;
	status: number;
	message: string | Error;
}
