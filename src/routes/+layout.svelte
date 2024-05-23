<script>
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import '@fontsource/short-stack';
	import '@fontsource/ubuntu-mono';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import 'animate.css';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.postcss';
	let isLoading = false;
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id));
	afterNavigate(() => setTimeout(() => (isLoading = false), 200));
	inject();
	injectSpeedInsights();
	onNavigate((navigation) => {
		if (!document?.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	let ready = false;
	onMount(() => {
		$theme = getOrSetItem('theme', 'light');
	});
</script>

<!-- <svelte:head>
</svelte:head> -->
<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>
	{@html '<script>' + partytownSnippet() + '</script>'}

	<script defer
		type="text/partytown"
		src="https://cloud.umami.is/script.js"
		data-website-id="7b096ad9-1f68-4172-aabc-cdbd04437982"
	></script>
	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-B22J642CLK"
	></script>
	<script async type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-B22J642CLK');
	</script>
</svelte:head>

<!-- <UmamiAnalytics
	websiteID="7b096ad9-1f68-4172-aabc-cdbd04437982"
	srcURL="https://cloud.umami.is/script.js"
/> -->

<ProgressBar class="text-pink-400 p-0.5 !z-50 rounded-full" />
<div class={`${$theme} max-w-screen `} data-barba="wrapper">
	<div
		class="dark:!bg-gray-950 dark:!text-gray-50 bg-gray-50 text-base-200 transition-colors duration-300"
	>
		<header>
			<Navbar />
		</header>
		<main class="min-h-screen">
			<slot />
		</main>

		<footer />
	</div>
</div>
