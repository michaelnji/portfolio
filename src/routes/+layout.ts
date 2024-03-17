// import type { MetaTagsProps } from 'svelte-meta-tags';
export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
