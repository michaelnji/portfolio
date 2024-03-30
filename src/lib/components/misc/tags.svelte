<script lang="ts">
	export let tags: any;

    
</script>

<div>
	<h1 class="mb-4 m-0 font-head text-xl w-full font-semibold  max-w-max uppercase">MORE CATEGORIES</h1>
<div class="flex flex-wrap w-full gap-2">
	{#each tags as tag}
	<a href={`/blog?tag=${tag.title}`}
					class="px-3 border-2 border-secondary py-1 font-bold hover:bg-secondary  dark:text-orange-300 dark:hover:text-gray-900 text-sm md:text-base font-mono transition duration-300 uppercase max-w-max"
				>
					{tag.title}
				</a>
	{/each}
</div>

</div>
