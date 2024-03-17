<script lang="ts">
	import About from '$lib/components/section/about.svelte';
	import Blog from '$lib/components/section/blog.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import Projects from '$lib/components/section/projects.svelte';
	export let data;
</script>

<Hero />
<div>
	<About />
</div>
<div class=" mt-24 mb-12">
	{#if data?.posts}
		<Blog posts={data.posts} />
	{/if}
</div>
<div class="mb-24">
	<Projects />
</div>
<Footer />
