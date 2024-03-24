<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Link from '../navigation/link.svelte';
	let el: HTMLElement;
</script>

<IntersectionObserver
	element={el}
	on:intersect={() => {
		anime({
			targets: `.banner`,
			opacity: 1,
			translateX: 0,
			duration: 1600,
			delay: 200
		});
	}}
>
	<section
		bind:this={el}
		class="w-full px-6 banner"
		style="transform:translateX(-100px); opacity:0"
	>
		<div class="max-w-max mx-auto transition duration-300 flex flex-wrap items-center gap-3">
			<span class=" text-xl text-center" style="word-spacing: 0px;">
				Version 01 of this portfolio can be found <Link target="_blank"
					href="https://mykenji.vercel.app">here</Link>  and my previous portfolios <Link
					 target="_blank"
					href="https://nji.vercel.app">here</Link
				> & <Link
					 target="_blank"
					href="https://michaeldev.netlify.app">here</Link
				>
			</span>
		</div>
	</section>
</IntersectionObserver>
