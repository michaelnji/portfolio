<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import BlogCard from './../display/blogCard.svelte';
	export let posts: any[];
	let el: HTMLElement;
</script>

<section class="py-12 w-full">
	<h1 class="text-4xl w-full max-w-6xl mx-auto md:text-5xl font-medium font-head text-center">
		Recent Posts
	</h1>
	<IntersectionObserver
		element={el}
		on:intersect={() => {
			anime({
				targets: '.blog',
				translateY: '0px',
				opacity: 1,
				duration: 1500,
				delay: 400
			});
		}}
	>
		<div
			bind:this={el}
			class=" mt-10 p-3 md:p-6  flex flex-wrap items-center justify-center !gap-8 xl:gap-16 blog w-full  lg:max-w-[100rem] mx-auto lg:grid grid-cols-2 xl:grid-cols-3"
			style="opacity: 0; transform:translateY(100px)"
		>
			{#each posts as post, i}
				{#if i <= 6}
					
						<BlogCard
						title={post.title}
						
						slug={post.slug.current}
						published={post.publishedAt}
						excerpt={post.excerpt}
						
					/>
					
				{/if}
			{/each}
		</div>
	</IntersectionObserver>
	<a
		href="/blog"
		class="btn btn-wrapper !rounded-none md:btn-lg btn-primary overflow-hidden ! border-2 border-black card-wrapper w-[90%] max-w-sm mx-auto flex justify-center font-medium mt-12 !text-2xl !capitalize"
		>View All</a
	>
</section>




