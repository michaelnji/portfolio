<script>
	import BlogCard from '$lib/components/display/blogCard.svelte';
	import Footer from '$lib/components/section/footer.svelte';
</script>

<section class="pb-12">
	<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center">
		Tag Title
	</h1>

	<div class="mt-12 p-6 flex flex-wrap justify-center items-center gap-6 w-full">
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>

	<h3
		class=" mt-12 text-xl w-full max-w-6xl mx-auto md:text-2xl font-extrabold font-head text-center"
	>
		More Tags
	</h3>
	<div class="mt-6 flex flex-wrap gap-3 max-w-4xl mx-auto justify-center items-center">
		<span
			class="px-3 py-1 hover:bg-opacity-100 hover:text-purple-50 dark:hover:text-primary dark:hover:bg-purple-200 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-purple-200 text-sm md:text-base font-mono transition duration-150"
		>
			ALL
		</span>
		<span
			class="px-3 py-1 hover:bg-opacity-100 hover:text-purple-50 dark:hover:text-primary dark:hover:bg-purple-200 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-purple-200 text-sm md:text-base font-mono transition duration-150"
		>
			SVELTEKIT
		</span>
		<span
			class="px-3 py-1 hover:bg-opacity-100 hover:text-purple-50 dark:hover:text-primary dark:hover:bg-purple-200 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-purple-200 text-sm md:text-base font-mono transition duration-150"
		>
			GOLANG
		</span>
		<span
			class="px-3 py-1 hover:bg-opacity-100 hover:text-purple-50 dark:hover:text-primary dark:hover:bg-purple-200 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-purple-200 text-sm md:text-base font-mono transition duration-150"
		>
			LIFESTYLE
		</span>
	</div>
</section>

<Footer />
