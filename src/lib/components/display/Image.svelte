<script>
	// @ts-nocheck

	export let src;
	export let alt = '';
	export let classes = '';

	import { createEventDispatcher, onMount } from 'svelte';

	let loaded = false;
	let thisImage;
	const dispatch = createEventDispatcher();
	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
			dispatch('loadedImg');
		};
	});
</script>

<figure class="relative h-full">
	{#if alt && alt !== ''}
		<div
			class="tooltip absolute left-4 top-4 z-10 tooltip-right tooltip-info"
			data-tip="The alt of the image"
		>
			<span class="badge badge-sm">
				{alt}
			</span>
		</div>
	{/if}
	<img loading="lazy" {src} {alt} class={classes} class:loaded bind:this={thisImage} />
</figure>

<style>
	img {
		@apply blur-md transition ease-in-out duration-1000 w-full object-cover h-full;
		/* opacity: 0; */
		background-color: transparent;
		background-image: linear-gradient(173deg, #fbda61 10%, #ff5acd 90%);
		border: none !important;
	}
	img.loaded {
		@apply blur-0 object-cover ring-0 border-0 outline-none;
		background-image: none;
		opacity: 1 !important;
		height: auto;
	}
</style>
