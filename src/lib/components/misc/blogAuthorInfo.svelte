<script lang="ts">
	import { urlFor } from '$lib/backend/sanity';
	import Twitter from 'svelte-simples/Twitter.svelte';
	export let author: any;
</script>

<div class=" max-w-2xl border-2 border-gray-900 w-full p-6 bg-primary card-wrapper transition duration-300 text-purple-100">
	<div class=" flex flex-col gap-3">
		<div class="flex flex-row gap-3 items-center">
			<img
				src={urlFor(author.imageUrl).format('webp').size(500, 500).url()}
				alt={author.name}
				class="w-14 h-14 rounded-full border-2 border-gray-500"
			/>
			<div>
				<p class="font-bold  flex gap-x-2 text-xl">{author.name}</p>
				<a href={author.twitter} target="_blank"
					><p class="font-medium font-head text-md flex gap-2 opacity-70 group">
						<Twitter
							width="20"
							height="20"
							class="group-hover:text-gray-900 transition-colors"
						/>@CodeD3vil
					</p></a
				>
			</div>
		</div>
		<p class="mt-2 prose text-purple-50 text-xl opacity-90">
			{author.bio[0].children[0].text}
		</p>
	</div>
</div>
