<script lang="ts">
	import BlogCard from '$lib/components/display/blogCard.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import extend from 'just-extend';
	import { MetaTags } from 'svelte-meta-tags';
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	export let data: any;
	$: metaTags = extend(true, {}, data.pageMetaTags, $page.data.pageMetaTags);
	let posts = data.posts;

	// biome-ignore lint/style/useConst: <explanation>
	let activeTag: string = data.activeTag ?? 'all';
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
<MetaTags {...metaTags} />

{#if data}
	<section class="py-12 md:pt-36 md:min-h-screen px-3">
		<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-5xl font-bold text-center text-pretty">
			{#if activeTag === 'all' }
			All Articles
				{:else}
				Articles in <br/> <b class="capitalize mt-2 text-primary">{activeTag.split('-').join(' ')}</b>
			{/if}
		</h1>
		
			<div class="mt-4 md:mt-12 flex flex-wrap gap-3 max-w-4xl mx-auto justify-center items-center">
				<button
					class="font-head text-md font-medium md:font-semibold  px-3 py-1.5 border-2 rounded-xl text-black border-black dark:border-gray-50 dark:text-gray-50 hover:!border-primary hover:!text-primary transition duration-300 !capitalize"
					class:!bg-primary={activeTag === 'all'}
					class:!text-white={activeTag === 'all'}
					class:!border-primary={activeTag === 'all'}
					on:click={() => {
						activeTag = 'all';
					}}
				>
					all articles
				</button>
				{#each data.tags as tag}
					<button
						class="font-head text-md font-medium md:font-semibold  px-3 py-1.5 border-2 rounded-xl text-black border-black dark:border-gray-50 dark:text-gray-50 hover:!border-primary hover:!text-primary transition duration-300 !capitalize"
						class:!bg-primary={activeTag === tag.title}
						class:!text-white={activeTag === tag.title}
						class:!border-primary={activeTag === tag.title}
						on:click={() => {
							activeTag = tag.title;
						}}
					>
						{tag.title.split('-').join(' ')}
					</button>
				{/each}
			</div>
		

		<div class="blogpage" style="opacity: 0; transform:translateY(100px)">
			<div
				use:autoAnimate
				class="prose-base mt-16 flex flex-wrap justify-center items-start gap-6 w-full lg:!grid grid-cols-3 max-w-7xl mx-auto"
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
