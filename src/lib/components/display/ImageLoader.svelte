<script>
	// @ts-nocheck
	export let src = '';
	export let alt = '';
	export let classes = '';

	import IntersectionObserver from './intersectionObserver.svelte';
	import Image from './Image.svelte';
	import { onMount } from 'svelte';

	let nativeLoading = false;
	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {alt} {src} {classes} />
	{/if}
</IntersectionObserver>
