<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import Marquee from 'svelte-fast-marquee';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Skills from '../misc/skills.svelte';
	let element: any;
	let play = false
	function animateEntry() {
		const items = document.querySelectorAll('.about-items');
		anime({
			targets: items,
			translateY: 0,
			opacity: 1,
			duration: 1200,
			delay: anime.stagger(300, { start: 600, easing: 'linear' })
		});
	}
	onMount(() => {
		if (window) {
			window.onscroll = () => {
				play = true
			};
			window.onscrollend = () => {
				
				play = false
			};
		}
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="  w-screen flex items-start justify-center" id="about">
	<div class="w-full">
		<div class="px-3 md:px-6">
			<IntersectionObserver
				{element}
				on:intersect={() => {
					animateEntry();
				}}
			>
				<div
					class=" grid grid-cols-1 gap-4 md:gap-11 lg:grid-cols-2 mx-auto w-full items-center justify-center md:items-start mb-[6rem] lg:mb-[9rem] border-8 border-dashed border-gray-700 dark:border-gray-400 p-4 md:p-12 max-w-7xl bg-gray-200 dark:bg-gray-800 rounded-3xl about-items"
					style="opacity: 0; transform: translateY(150px)"
				>
					<div
						bind:this={element}
						class="w-full flex items-center about-items"
						style="opacity: 0; transform: translateY(50px)"
					>
						<div class="prose p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
							<h3 class="text-3xl md:text-4xl dark:text-gray-100 font-medium font-head">I Develop Kool Stuff</h3>
							<p class="text-xl md:text-2xl dark:text-gray-100 opacity-70  mt-2">
								I’m a self-taught Software Engineer and Technical Writer with over a year of
								experience working with several technologies to build some <a
									href="/"
									class="font-head font-medium text-primary underline">pretty cool software</a
								> .
							</p>
						</div>
					</div>
					<div
						class="w-full about-items flex items-center"
						style="opacity: 0; transform: translateY(50px)"
					>
						<div class="prose p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
							<h3 class="text-3xl md:text-4xl dark:text-gray-100 font-medium font-head">Currently working on</h3>
							<p class="text-xl md:text-2xl dark:text-gray-100 opacity-70 mt-2">
								I’m currently working on <a
									href="https://seabridge.vercel.app"
									class="font-head font-medium text-yellow-600 underline">Seabridge</a
								>, a business management system for mini importation businesses and
								<a href="https://decko.vercel.app" class="font-head font-medium text-green-600 underline">Decko</a>, a
								platform to buy and manage virtual credit cards.
							</p>
						</div>
					</div>
				</div>
			</IntersectionObserver>
		</div>

		<!-- skills -->
	
			
			<div class="rotate-3  bg-black p-3">
				<Marquee play={play} speed={45}>
					<Skills />
				</Marquee>
			</div>
		
	</div>
</div>
