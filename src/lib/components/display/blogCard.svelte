<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import { getReadableDate } from '$lib/utils/timeFunctions';
	import Eye from 'svelte-heros-v2/Eye.svelte' 
	export let title: string;
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
	export let views: number | null | undefined
</script>

<div class="group w-full max-w-xl">
	
	<div class="prose  card-wrapper  z-20 p-6 bg-white dark:bg-gray-900 border-black dark:border-gray-700   border-2 transform  duration-150 transition">
		<span class="text-md font-mono  dark:text-gray-400">{getReadableDate(published)}</span>
		
		<h3 class="text-3xl  font-semibold font-head m-0  dark:text-gray-100">{title}</h3>
		<p class="text-lg dark:text-gray-100 opacity-90 mt-2 line-clamp-3">
			{excerpt}
		</p>
		<div class="flex mt-1 items-center justify-between">
			<a href={`/blog/${slug}`} class=" hover:bg-black hover:text-white transition duration-300 text-md border-2 border-black no-underline p-1 px-3 dark:text-gray-50 dark:border-gray-500 rounded-lg ">
			Read article
		</a>
				{#if views }
					<span class="flex gap-x-1 items-center dark:text-gray-100">
				<Eye size='24'/> <b>{numToSummary(views)}</b>
			</span>
	
				{/if}
		</div>
		
		</div>
</div>

