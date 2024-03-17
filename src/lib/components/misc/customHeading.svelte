<!-- CustomHeading (blockStyle) -->
<script lang="ts">
	import currentItem from '$lib/stores/toc-store';
	// @ts-ignore
	import speakingurl from 'speakingurl';
	import IntersectionObserver from 'svelte-intersection-observer';
	export let portableText: any;
	$: ({   value } = portableText);
	// $: ({ ptBlocks } = global);
	$: ({ style } = value);
	$: anchorId = `${speakingurl(value.children[0].text, '-')}`;
	let element: HTMLDivElement;
	let intersecting: any;
</script>

<IntersectionObserver
	{element}
	once={false}
	bind:intersecting
	on:intersect={() => {
		$currentItem = anchorId;
	}}
>
	<div bind:this={element} id={anchorId} class="group relative">
		<!-- <div class="h-1 w-28 bg-gray-900 dark:bg-gray-100"></div> -->
		{#if style === 'h1'}
			<h1 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h1>
		{:else if style === 'h2'}
			<h2 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h2>
		{:else if style === 'h3'}
			<h3 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h3>
		{:else if style === 'h4'}
			<h4 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h4>
		{:else if style === 'h5'}
			<h5 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h5>
		{:else}
			<h6 class=" flex w-full items-center gap-x-3 !font-head">
				<a
					href="#{anchorId}"
					class=" no-underline opacity-0 group-hover:opacity-100 absolute text-lg -left-6 focus:opacity-100 transition-opacity duration-500"
				>
					<span class="sr-only">Link to this heading</span>
					🔗
				</a>
				<slot />
			</h6>
		{/if}
	</div>
</IntersectionObserver>
