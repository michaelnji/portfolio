<script>
	  import { page } from '$app/stores';
	  import extend from 'just-extend';
	  import { MetaTags } from 'svelte-meta-tags';
	  import { fade } from 'svelte/transition';
// @ts-nocheck
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Loader from '$lib/components/misc/loader.svelte';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import 'animate.css';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.postcss';
	export let data 
	let isLoading = false;
 $: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id));
	afterNavigate(() => setTimeout(() => (isLoading = false), 800));
	inject();
	injectSpeedInsights();

	let ready = false;
	onMount(() => {
		ready = true;
		$theme = getOrSetItem('theme', 'light');
	});
</script>

<MetaTags {...metaTags} />
{#if ready}
	<div class={`${$theme} !overflow-hidden`}>
		{#if isLoading}
			<div out:fade={{ duration: 150 }}><Loader /></div>
		{/if}
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
<!-- {:else}
	<div
		class=" dark:bg-gray-950 h-screen !overflow-hidden grid place-items-center"
		out:fade={{ duration: 150 }}
	>
		<Loader />
	</div> -->
{/if}
