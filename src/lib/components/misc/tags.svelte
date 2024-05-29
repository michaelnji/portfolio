<script lang="ts">
	import type { Tag } from "$lib/types";

	export let tags:Tag[] | undefined;

    
</script>

<div>
	<h1 class="mb-4 m-0  text-xl w-full font-semibold  max-w-max uppercase">MORE CATEGORIES</h1>
<div class="flex flex-wrap w-full gap-2">
{#if tags }
		{#each tags as tag}
	<a href={`/blog?tag=${tag.title}`}
					class=" text-md font-medium md:font-semibold  px-3 py-1.5 border-2 rounded-xl text-black border-black dark:border-gray-50 dark:text-gray-50 hover:!border-primary hover:!text-primary transition duration-300 !capitalize max-w-max"
				>
					{tag.title.split('-').join(' ')}
				</a>
	{/each}
{/if}
</div>

</div>
