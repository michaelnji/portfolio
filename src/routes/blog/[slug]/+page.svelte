<script lang="ts">
	import { page } from '$app/stores';
	import { urlFor } from '$lib/backend/sanity.js';
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
	import Toc from '$lib/components/misc/toc.svelte';
	import LinkBlog from '$lib/components/navigation/linkBlog.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import metadata from '$lib/stores/metadata.js';
	import { easeInOutBack } from '$lib/utils/animations.js';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	import { PortableText } from '@portabletext/svelte';
	import extend from 'just-extend';
	import { onMount } from 'svelte';
	import Calendar from 'svelte-heros-v2/CalendarDays.svelte';
	import 'svelte-highlight/styles/onedark.css';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly } from "svelte/transition";

	let ready = false;
	export let data;
$: metaTags = extend(true, {}, data.pageMetaTags, $page.data.pageMetaTags);
	onMount(() => {
		$metadata = data.meta_data
			ready = true;
			// console.log(data.post?.body)
	});
</script>

<MetaTags {...metaTags} />
	{#if ready && data.post}
<div class="px-4 md:px-6 lg:px-12">
	<main class="w-full pt-12 mb-12   flex justify-center xl:gap-x-36">
		<section in:fly={{y:100, easing: easeInOutBack, duration: 1000}} class=" w-full max-w-4xl  mx-auto xl:mx-0 blogsection" >
			<div class="w-full">
				<img 
					src={urlFor(data?.post.imageUrl).format('webp').size(1400, 700).url()}
					width="1400"
					height="700"
					alt=""
					
					class=" mb-3 border-2 border-gray-900 custom-img w-full"
				/>
				<h1 class="mt-6 m-0 text-4xl w-full img md:text-5xl font-bold">
					{data.post.title}
				</h1>
				<p class="font-medium my-6 font-sans opacity-80 flex gap-x-2 items-center">
					<Calendar />
					<span class="text-gray-700 dark:text-gray-200 font-medium text-xl"
						>{data.post._updatedAt && getReadableDate(data.post._updatedAt) !== getReadableDate(data.post.publishedAt)
							? `Last updated ${getReadableDate(data.post._updatedAt)}`
							: `Published ${getReadableDate(data.post.publishedAt)}`}</span
					>
				</p>

				<div
					class="mb-4 mt-4 p-2 pr-4 rounded-full bg-gray-100 max-w-max dark:bg-gray-800 flex flex-wrap gap-3 items-center"
				>
					<img
						src={urlFor(data?.post.authorInfo.imageUrl).format('webp').size(500, 500).url()}
						alt=""
						class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
					/>
					<p class="font-medium opacity-80 text-lg flex items-center gap-2">
						{data.post.authorInfo.name}
					</p>
				</div>
			</div>

			<div class="divider" />
			<section
				class="!min-w-full prose-p:!min-w-full mt-10 prose prose-xl md:prose-2xl dark:prose-invert prose-headings:font-bold prose-pre:!p-0 prose-pre:whitespace-pre-wrap prose-pre:!bg-inherit prose-pre:!text-lg md:prose-pre:!text-xl lg:prose-pre:!text-2xl prose-purple border-b-2 dark:border-gray-700 pb-10"
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
			<aside class="mt-8">
				<BlogAuthorInfo author={data.post.authorInfo} />
			</aside>
		</section>
		<aside  in:fly={{y:-100, easing: easeInOutBack, duration: 1000}} class="!max-w-2xl hidden xl:block">
			<div class=" w-full as">
				<Toc outline={data.toc} />
				
				<div class="mt-10 px-6 md:px-0">
					<Tags tags={data.tags.tags} />
				</div>
				<div class="mt-10 px-6 md:px-0">
					<RelatedPosts posts={data.relatedPosts} />
				</div>
				<div class="mt-10 px-6 md:px-0">
					<MetaData  />
				</div>
			</div>
		</aside>
	</main>
	<div class="mb-24 mt-0  max-w-4xl md:mx-auto  xl:hidden ">
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
		top: 2rem;
	}
</style>
