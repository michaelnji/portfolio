<script lang="ts">
	import { page } from '$app/stores';
	import { urlFor } from '$lib/backend/sanity';
	import BlogAuthorInfo from '$lib/components/misc/blogAuthorInfo.svelte';
	import BlogImg from '$lib/components/misc/blogImg.svelte';
	import CodeBlock from '$lib/components/misc/codeBlock.svelte';
	import ColorBlock from '$lib/components/misc/colorBlock.svelte';
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import Gotcha from '$lib/components/misc/gotcha.svelte';
	import Hint from '$lib/components/misc/hint.svelte';
	import InlineCodeBlock from '$lib/components/misc/inlineCodeBlock.svelte';
	import MetaData from '$lib/components/misc/metaData.svelte';
	import Quote from '$lib/components/misc/quote.svelte';
	import RelatedPosts from '$lib/components/misc/relatedPosts.svelte';
	import Tags from '$lib/components/misc/tags.svelte';
// import Toc from '$lib/components/misc/toc.svelte';
	import LinkBlog from '$lib/components/navigation/linkBlog.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import metadata from '$lib/stores/metadata.js';
	import { easeInOutBack } from '$lib/utils/animations.js';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	import { PortableText } from '@portabletext/svelte';
	import extend from 'just-extend';
	import { onMount } from 'svelte';
	import Calendar from 'svelte-heros-v2/CalendarDays.svelte';
	import PencilSquare from 'svelte-heros-v2/PencilSquare.svelte';
	import 'svelte-highlight/styles/dracula.css';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly } from "svelte/transition";

	let ready = false;
	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	export let data;
$: metaTags = extend(true, {}, data.pageMetaTags, $page.data.pageMetaTags);
	onMount(() => {
		console.log(data.meta_data)
		$metadata = data.meta_data
			ready = true;
			
	});
</script>

<MetaTags {...metaTags} />
	{#if ready && data.post}
<div class="px-4 md:pt-20 md:px-6 lg:px-12 w-full">
	<main class="w-full pt-12 mb-12   flex justify-center xl:gap-x-36">
		<section in:fly={{y:100, easing: easeInOutBack, duration: 1000}} class=" w-full max-w-2xl  mx-auto xl:mx-0 blogsection" >
			<div class="w-full">
					<img 
					src={urlFor(data?.post.imageUrl).format('webp').size(1400, 700).url()}
					width="1400"
					height="700"
					alt=""
					
					class=" mb-8 border-4 border-gray-900 custom-img w-full "
				/>
					<p class=" font-sans mb-1 py-1 px-3 rounded-full bg-gray-200 dark:bg-gray-900 max-w-max opacity-80 flex gap-x-2 items-center font-medium">
					{#if data.post._updatedAt && getReadableDate(data.post._updatedAt) !== getReadableDate(data.post.publishedAt) }
					<PencilSquare />
					{:else}
					<Calendar />
					{/if}
					<span class="text-gray-700 dark:text-gray-200 text-lg "
						>{data.post._updatedAt && getReadableDate(data.post._updatedAt) !== getReadableDate(data.post.publishedAt)
							? ` Updated ${getReadableDate(data.post._updatedAt)}`
							: `Published ${getReadableDate(data.post.publishedAt)}`}</span
					>
				</p>
				<h1 class="mb-8  text-4xl w-full img md:text-5xl font-extrabold text-pretty">
					{data.post.title}
				</h1>
			

				<!-- <div
					class="mb-8 mt-4  flex flex-wrap gap-3 items-center"
				>
					<img
						src={urlFor(data?.post.authorInfo.imageUrl).format('webp').size(500, 500).url()}
						alt=""
						class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
					/>
					<p class="font-medium opacity-80 text-lg flex !items-center gap-2 ">
					 <span class='font-semibold font-head'>
							{data.post.authorInfo.name}
						</span> <CheckBadge class='text-primary font-bold'/>
					</p>
				</div> -->
			
			</div>

			<!-- <div class="my-6 font-semibold p-6 border-l-8 bg-gray-100 border-gray-900 prose text-2xl  text-pretty">
				{data.post.excerpt}
			</div> -->

			<section
				class="!min-w-full   prose-p:!min-w-full  prose prose-lg md:!prose-xl   dark:prose-invert prose-sky prose-headings:font-extrabold prose-headings prose-pre:!p-0 prose-pre:whitespace-pre-wrap prose-p:text-pretty prose-pre:!bg-inherit prose-pre:!text-lg md:prose-pre:!text-xl lg:prose-pre:!text-2xl  border-b-2 dark:border-gray-700 pb-10"
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
							code: InlineCodeBlock,
							link: LinkBlog
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
							gotcha: Gotcha,
						}
					}}
				/>
			</section>
			<aside class="mt-8 overflow-hidden rounded-xl">
				<BlogAuthorInfo author={data.post.authorInfo} />
			</aside>
		</section>
		<aside  in:fly={{y:-100, easing: easeInOutBack, duration: 1000}} class="!max-w-lg hidden xl:block">
			<div class=" w-full as">
				<!-- <Toc outline={data.toc} /> -->
				
				<div class=" px-6 md:px-0">
					<Tags tags={data.tags.tags} />
				</div>
				<div class="mt-10 px-6 md:px-0">
					<RelatedPosts posts={data.relatedPosts} />
				</div>
				<div class="mt-10 px-6 md:px-0">
					<MetaData />
				</div>
			</div>
		</aside>
	</main>
	<div class="mb-24 mt-0 w-full max-w-2xl md:!mx-auto  xl:hidden ">
		<div class="mb-16">
					<MetaData  />
				</div>
		<RelatedPosts posts={data.relatedPosts} />
		<div class="mt-16">
					<Tags tags={data.tags.tags} />
				</div>
	</div>
</div>
	<Footer />
{/if}

<style>
	.custom-img {
		box-shadow: 4px 4px black;
	}
	.as {
		position: sticky;
		top: 9rem;
	}
</style>
