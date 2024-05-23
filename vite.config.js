import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import webfontDownload from "vite-plugin-webfont-dl";
import { partytownVite } from '@builder.io/partytown/utils';
import { defineConfig } from 'vitest/config';
export default defineConfig({
	alias: {
		$lib: path.resolve(__dirname, './src/lib')
	},
	plugins: [
		webfontDownload([
			"https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap",
			"https://api.fontshare.com/v2/css?f[]=satoshi@700,400,300,1,800,600,500,200&display=swap",
			'https://api.fontshare.com/v2/css?f[]=array@700,701,601,600,401&display=swap',
			'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,800,500,100,700,400,300,200,900&display=swap',
			"https://fonts.bunny.net/css?family=amita:400,700"
		])
		,
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'static', '~partytown'),
			debug: true
		}),],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		reporters: ['html', 'default'],
		coverage: {

			provider: 'istanbul',

			reporter: ['html', 'json']
		}
	},
	build: {
		minify: true

		// rollupOptions: {
		// 	output: {
		// 		manualChunks: function manualChunks(id) {
		// 			if (id.includes('node_modules/animejs')) {
		// 				return 'vendor';
		// 			}
		// 			if (id.includes('node_modules/svelte-simples')) {
		// 				return 'icons-svelte-simples';
		// 			}

		// 			if (id.includes('src/lib/components/section/about.svelte')) {
		// 				return 'about';
		// 			}
		// 			if (id.includes('src/lib/components/section/projects.svelte')) {
		// 				return 'projects';
		// 			}
		// 			if (id.includes('src/lib/components/section/footer.svelte')) {
		// 				return 'footer';
		// 			}
		// 			if (id.includes('src/lib/components/section/hero.svelte')) {
		// 				return 'hero';
		// 			}
		// 			if (id.includes('src/lib/components/section/blog.svelte')) {
		// 				return 'blog';
		// 			}
		// 			if (id.includes('svelte-heros-v2')) {
		// 				return 'svelte-heros-v2';
		// 			}
		// 		}
		// 	}
		// }
	}
});
