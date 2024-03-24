<script lang="ts">
	import Link from '../navigation/link.svelte';

	export let posts: any;
</script>

<div>
	<h1 class="mb-4 m-0 text-xl w-full font-semibold max-w-max uppercase">More Articles</h1>
	<div class="flex flex-col w-full gap-y-2">
		{#each posts as post}
			<Link   href={`/blog/${post.slug.current}`} classes="text-xl text-pretty">
				{post.title}
			</Link>
		{/each}
	</div>
</div>
