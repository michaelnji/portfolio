<script>
	// import { page } from '$app/stores';
	// import extend from 'just-extend';
	// import { MetaTags } from 'svelte-meta-tags';
	import { fly, fade } from 'svelte/transition';
	 import { ProgressBar } from "@prgm/sveltekit-progress-bar";
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import 'animate.css';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.postcss';
	import '@fontsource/short-stack';
	// import '@fontsource/gochi-hand';
	import '@fontsource/ubuntu-mono';
	// export let data;
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
<ProgressBar class="text-secondary p-1 rounded-full" />
<!-- <MetaTags {...metaTags} /> -->
	<div class={`${$theme} max-w-screen `} data-barba="wrapper">
		<div 
			class="dark:!bg-gray-950 dark:!text-gray-50 bg-white text-base-400 transition-colors duration-300"
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

