<script lang="ts">
	import InfoBanner from '$lib/components/display/infoBanner.svelte';
	import QuoteComp from '$lib/components/display/quoteComp.svelte';
import About from '$lib/components/section/about.svelte';
	import Blog from '$lib/components/section/blog.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import Projects from '$lib/components/section/projects.svelte';
	import { page } from '$app/stores';
	import extend from 'just-extend';
	import { MetaTags } from 'svelte-meta-tags';
	export let data;
	$: metaTags = extend(true, {}, data.pageMetaTags, $page.data.pageMetaTags);
</script>
<MetaTags {...metaTags} />

<div class="overflow-x-hidden"><Hero />

<About />

<div class=" mt-24 mb-12">
	{#if data?.posts}
		<Blog posts={data.posts} />
	{/if}
</div>
<div class="mb-24">
	<Projects />
</div>
<div class="mb-24">
	{#if data.quotes }
		<div class="mb-24">
			<QuoteComp info={data.quotes}/>
	</div>
	{/if}
	<InfoBanner/>
</div>
<Footer /></div>
