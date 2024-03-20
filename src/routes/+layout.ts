// import type { MetaTagsProps } from 'svelte-meta-tags';
import type { MetaTagsProps } from 'svelte-meta-tags';
export const load = ({ url }) => {
	const { pathname } = url;
	const baseMetaTags = Object.freeze({
		title: 'Michael Nji',
		titleTemplate: '%s | Michael Nji',
		description: 'A self taught web developer, in love with building beautiful UIs and responsive backends.',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_IE',
			title: 'Michael Nji',
			description: 'A self taught web developer, in love with building beautiful UIs and responsive backends.',
			siteName: 'Michael NJi',
			images: [
				{
					url: `${new URL(url.origin).href}/images/myke.webp`,
					alt: 'A picture of Michael Nji',
					width: 800,
					height: 600,

					type: 'image/webp'
				}
			]
		}, twitter: {
			handle: '@CodeD3vil',
			site: '@site',
			// cardType: 'summary_large_image',
			title: 'Michael Nji',
			description: 'Welcome to my personal website',
			image: `${new URL(url.origin).href}/images/myke.webp`,
			imageAlt: 'picture of Michael Nji'

		}
	}) satisfies MetaTagsProps;
	return {
		baseMetaTags,
		pathname
	};
};
