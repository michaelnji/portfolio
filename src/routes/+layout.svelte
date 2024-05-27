<script>
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	// import { partytownSnippet } from '@builder.io/partytown/integration';
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
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id));
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
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
	const ready = false;
	onMount(() => {
		$theme = getOrSetItem('theme', 'light');
	});
</script>



<ProgressBar class="text-pink-400 p-0.5 !z-50 rounded-full" />
<div class={`${$theme} max-w-screen `} data-barba="wrapper">
	<div
		class="dark:!bg-gray-950 dark:!text-gray-50 bg-gray-50 text-black transition-colors duration-300"
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
