<script lang="ts">
	import { fade } from 'svelte/transition';
	// import autoAnimate from '@formkit/auto-animate';
	import BlogCard from '$lib/components/display/blogCard.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	export let data: any;
	let activeTag: string = 'all';

	function tagExists(tags: any): boolean {
		let exists = false;
		for (let index = 0; index < tags.length; index++) {
			const tag = tags[index];
			if (tag.title === activeTag) {
				exists = true;
				break;
			}
		}
		return exists;
	}
</script>

<section class="py-12 md:min-h-screen">
	<h1 class="text-4xl w-full max-w-6xl mx-auto md:text-5xl font-bold font-head text-center">
		Article Garden🌿
	</h1>
	{#key activeTag}
		<div class="mt-6 flex flex-wrap gap-3 max-w-4xl mx-auto justify-center items-center">
			<button
				class="px-3 py-1 hover:bg-primary hover:text-purple-50 text-primary bg-purple-100 font-bold dark:bg-opacity-10 dark:text-purple-300 rounded-xl text-sm md:text-base font-mono transition duration-150"
				class:!bg-primary={activeTag === 'all'}
				class:!text-white={activeTag === 'all'}
				on:click={() => {
					activeTag = 'all';
				}}
			>
				ALL
			</button>
			{#each data.tags as tag}
				<button
					class="px-3 rounded-xl py-1 font-bold hover:bg-primary hover:text-purple-50 text-primary bg-primary bg-opacity-10 dark:text-purple-300 text-sm md:text-base font-mono transition duration-150 uppercase"
					class:!bg-primary={activeTag === tag.title}
					class:!text-white={activeTag === tag.title}
					on:click={() => {
						activeTag = tag.title;
					}}
				>
					{tag.title}
				</button>
			{/each}
		</div>

		{#if activeTag === 'all'}
			<div class="prose-base mt-6 p-6 flex flex-wrap justify-center items-start gap-6 w-full">
				{#each data.posts as post}
					<div>
						<BlogCard
							title={post.title}
							tags={post.tags}
							slug={post.slug.current}
							published={post.publishedAt}
							excerpt={post.excerpt}
							image={post.imageUrl}
						/>
					</div>
				{/each}
			</div>
		{:else}
			<div class="prose-base mt-6 p-6 flex flex-wrap justify-center items-start gap-6 w-full">
				{#each data.posts as post}
					{#if tagExists(post.tags)}
						<div out:fade>
							<BlogCard
								title={post.title}
								tags={post.tags}
								slug={post.slug.current}
								published={post.publishedAt}
								excerpt={post.excerpt}
								image={post.imageUrl}
							/>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	{/key}
</section>

<div><Footer /></div>
