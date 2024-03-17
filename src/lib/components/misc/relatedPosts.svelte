<script lang="ts">
	export let posts: any;
</script>

<h1 class="mb-12 text-3xl text-center w-full md:text-4xl font-semibold font-head">More Articles</h1>
<div class="flex flex-wrap w-full gap-6 items-center justify-center mb-12">
	{#each posts as post}
		<div
			class=" w-full max-w-2xl grid grid-cols-1 gap-y-3 md:gap-x-3 md:gap-y-0 border-2 border-gray-900 rounded-3xl dark:bg-gray-900 group card-wrapper duration-500 ease-out"
		>
			<div class=" overflow-hidden" />
			<div class="p-6">
				<h1 class="text-2xl capitalize font-bold font-head">
					{post.title}
				</h1>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each post.tags as tag}
						<a href={`/blog/tags/${tag.title}`}>
							<span
								class="  px-3 py-1 font-bold text-gray-700 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-200 font-mono transition text-xs md:text-base"
							>
								{tag.title}
							</span>
						</a>
					{/each}
				</div>
				<p class="mt-6 text-xl opacity-75 font-medium line-clamp-2">
					{post.excerpt}
				</p>
				<div class="mt-2">
					<a
						href={`/blog/${post.slug.current}`}
						class="font-semibold text-lg transition dark:text-purple-200 text-primary border-b-2 border-transparent hover:border-primary dark:hover:border-purple-200"
						>Read more
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
