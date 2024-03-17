<script lang="ts">
	import { urlFor } from '$lib/backend/sanity.js';
	import BlogAuthorInfo from '$lib/components/misc/blogAuthorInfo.svelte';
	import BlogImg from '$lib/components/misc/blogImg.svelte';
	import CodeBlock from '$lib/components/misc/codeBlock.svelte';
	import ColorBlock from '$lib/components/misc/colorBlock.svelte';
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import Gotcha from '$lib/components/misc/gotcha.svelte';
	import Hint from '$lib/components/misc/hint.svelte';
	import InlineCodeBlock from '$lib/components/misc/inlineCodeBlock.svelte';
	import Quote from '$lib/components/misc/quote.svelte';
	import RelatedPosts from '$lib/components/misc/relatedPosts.svelte';
	import Toc from '$lib/components/misc/toc.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	import Calendar from 'svelte-heros-v2/CalendarDays.svelte';
	import 'svelte-highlight/styles/material-palenight.css';
	import { fly } from 'svelte/transition';
	let ready = false;
	export let data;
	onMount(() => {
		ready = true;
	});
</script>



{#if ready && data.post}
	<section
		class="px-6  max-w-5xl mx-auto pt-12"
		in:fly={{ y: 100, duration: 700, delay: 800 }}
	>
		<div class="w-full">
			

			<h1 class="mt-6 m-0 text-4xl w-full md:text-5xl font-bold !font-head">
				{data.post.title}
			</h1>
			<p class="font-medium my-6 font-sans opacity-80 flex gap-x-2 items-center">
				<Calendar/>
				<span class="text-gray-700 dark:text-gray-200 font-medium text-xl"
					>{data.post._updatedAt
						? `Last updated ${getReadableDate(data.post._updatedAt)}`
						: `Published ${getReadableDate(data.post.publishedAt)}`}</span
				>
			</p>
			<div class="mt-3 flex flex-wrap gap-3 items-center w-full">
				{#each data.post.tags as tag}
					<span
						class="px-3 py-1 rounded-xl hover:bg-opacity-100 hover:text-purple-50 dark:hover:text-primary dark:hover:bg-purple-200 font-bold bg-primary bg-opacity-10 text-primary dark:text-purple-200 text-sm md:text-base font-mono transition duration-150"
					>
						{tag.title}
					</span>
				{/each}
			</div>

			<div
				class="mb-4 mt-4 p-2 pr-4 rounded-full bg-gray-100 max-w-max dark:bg-gray-800 flex flex-wrap gap-3 items-center"
	 		>
				<img
					src={data.post.authorInfo.imageUrl}
					alt=""
					class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<p class="font-medium opacity-80 text-lg flex items-center gap-2">
					{data.post.authorInfo.name}
				</p>
			</div>
		</div>
		<img
			src={urlFor(data?.post.imageUrl).format('webp').size(2000,1200).url()}
				width="2000"
					height="1200"
				
				alt=""
				class=" mt-3 border-2 border-gray-900 custom-img w-full max-w-3xl rounded-xl"
			/>
		<aside class=" w-full max-w-3xl my-12">
			<div class="hidden xl:block w-full"><Toc outline={data.toc} /></div>
		</aside>
		<section
			class="!min-w-full prose-p:!min-w-full mt-10 prose prose-xl md:prose-2xl dark:prose-invert prose-headings:font-medium prose-pre:!rounded-2xl prose-pre:!p-0 prose-pre:whitespace-pre-wrap prose-pre:border-2 prose-pre:border-gray-900 prose-pre:!bg-inherit prose-pre:!text-md prose-purple border-b-2 dark:bolder-gray-700 pb-10"
		>
			<PortableText
				value={[...data.post.body]}
				components={{
					types: {
						code: CodeBlock,
						image: BlogImg,
						img: BlogImg
					},
					marks: {
						color: ColorBlock,
						code: InlineCodeBlock
					},

					block: {
						// Re-using the same component across multiple styles
						h1: CustomHeading,
						h2: CustomHeading,
						h3: CustomHeading,
						h4: CustomHeading,
						h5: CustomHeading,
						h6: CustomHeading,
						blockquote: Quote,
						hint: Hint,
						gotcha: Gotcha
					}
				}}
			/>
		</section>
		<aside class="mt-8">
			<BlogAuthorInfo author={data.post.authorInfo} />
		</aside>
	</section>
	<div class="mt-24 px-6 md:px-0">
		<RelatedPosts posts={data.relatedPosts} />
	</div>
	<Footer />
{/if}

<style>
	.custom-img {
		box-shadow: 4px 4px black;
	}
</style>
