<script lang="ts">
	import { getReadableDate } from '$lib/utils/timeFunctions';
	export let title: string;
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
</script>

<div class="group w-full max-w-xl">
	
	<div class="prose rounded-3xl card-wrapper  z-20 p-6 bg-white dark:bg-gray-900 border-black  border-2 transform  duration-150 transition">
		<span class="mt-1 text-md font-mono  dark:text-gray-400">{getReadableDate(published)}</span>
		<h3 class="text-3xl  font-medium font-head m-0  dark:text-gray-100">{title}</h3>
		<p class="text-xl dark:text-gray-100 opacity-90 mt-2 line-clamp-3">
			{excerpt}
		</p>
		<a href={`/blog/${slug}`} class="btn-wrapper border-2 border-black no-underline p-1 px-3 dark:text-gray-100 ">
			read article
		</a>
		</div>
</div>

