<script>
	/**
	 * @type {any}
	 */
	export let outline;
	import currentItem from '$lib/stores/toc-store';
	import { fly } from 'svelte/transition';
</script>

<div
	class="p-6 border-2  transition duration-300 w-full border-gray-900 max-h-[20rem] overflow-y-auto  dark:bg-gray-900"
	
>
	<h3 class="mb-4 font-semibold uppercase text-xl">On this page</h3>
	<ul class="flex flex-col list-outside list-none gap-y-3">
		{#key $currentItem}
			{#each outline as heading}
				<a href={'#' + heading.slug} class=" no-underline !text-opacity-50 scroll-smooth">
					<li
						class="bg-gray-800  py-1 px-2 bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-60 text-xl"
						class:!bg-opacity-100={$currentItem === heading.slug}
						class:!bg-primary={$currentItem === heading.slug}
						class:!text-white={$currentItem === heading.slug}
						
					>
						{heading.text}
					</li>
				</a>
			{/each}
		{/key}
	</ul>
</div>
