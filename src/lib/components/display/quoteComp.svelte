<script lang="ts">
	import anime from 'animejs';
	import Sparkles from 'svelte-heros-v2/Sparkles.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	export let info: { quote: string; author: string };
	let el: HTMLParagraphElement;
</script>

<div class="px-6">
	<IntersectionObserver
		element={el}
		on:intersect={() => {
			anime({
				targets: `.quote`,
				rotate: '6deg',
				duration: 20,
				easing: 'easeOutElastic(1, .6)',
				delay: 800
			});
		}}
	>
		<div
			class="border-4 bg-white dark:bg-gray-900 p-6 card-wrapper max-w-4xl mx-auto border-black transition duration-300 quote"
		>
			<div class="mb-9">
				<Sparkles size="50" />
			</div>
			<p bind:this={el} class=" text-xl md:text-2xl prose dark:prose-invert">
				{info.quote}
			</p>
			<div class="ml-auto mt-12 max-w-max text-2xl md:text-4xl font-head font-semibold">
				~ {info.author}
			</div>
		</div>
	</IntersectionObserver>
</div>
