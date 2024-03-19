<script lang="ts">
	// import autoAnimate from '@formkit/auto-animate';
	import BlogCard from '$lib/components/display/blogCard.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	export let data: any;
	let posts = data.posts;
	let activeTag: string = data.activeTag ?? 'all';
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
	function animatePage() {
		anime({
			targets: '.blogpage',
			translateY: '0px',
			opacity: 1,
			duration: 1500
		});
	}
	$: {
		if (activeTag) {
			if (activeTag === 'all') {
				posts = data.posts;
			} else {
				posts = data.posts.filter((x: any) => {
					return tagExists(x.tags);
				});
			}
		}
	}
	onMount(() => {
		animatePage();
	});
</script>

{#if data}
	<section class="py-12 md:min-h-screen px-3">
		<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-5xl font-medium font-head text-center">
			{#if activeTag === 'all' }
			All Posts
				{:else}
				Tag: <small>{activeTag}</small>
			{/if}
		</h1>
		
			<div class="mt-4 md:mt-12 flex flex-wrap gap-3 max-w-4xl mx-auto justify-center items-center">
				<button
					class="px-3 border border-primary py-1 font-medium hover:bg-primary hover:text-purple-50 text-primary bg-primary bg-opacity-10 dark:text-purple-300 text-sm md:text-base font-mono transition duration-300 uppercase"
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
						class="px-3 border border-primary py-1 font-medium hover:bg-primary hover:text-purple-50 text-primary bg-primary bg-opacity-10 dark:text-purple-300 text-sm md:text-base font-mono transition duration-300 uppercase"
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
		

		<div class="blogpage" style="opacity: 0; transform:translateY(100px)">
			<div
				use:autoAnimate
				class="prose-base mt-16 p-6 flex flex-wrap justify-center items-start gap-6 w-full lg:!grid grid-cols-3 max-w-7xl mx-auto"
			>
				{#each posts as post}
					<div>
						<BlogCard
							title={post.title}
							slug={post.slug.current}
							published={post.publishedAt}
							excerpt={post.excerpt}
						/>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div><Footer /></div>
{/if}
