<script lang="ts">
	import { urlFor } from '$lib/backend/sanity';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	onMount(async () => {
		anime({
			targets: '.hero-text',
			translateX: '0px',
			opacity: {
				value: '1',
				duration: 500
			},
			duration: 1500,
			 
		});
		anime({
			targets: '.hero-main',
			scale: 1,
			delay: 500,
			duration: 1500,
			 
		});
		anime({
			targets: '.hero-1',
			rotate: {value:'12deg'},
			translateY:{
				value: '-1.95rem',
				duration:500
			},
			translateX:{
				value: '1rem',
				duration:500
			},
			delay: 1500,
			
			 
		});
		anime({
			targets: '.hero-2',
			rotate: {value:'-20deg'},
			translateY:{
				value: '-3rem',
				duration:500
			},
			translateX:{
				value: '-1.6rem',
				duration:500
			},
			delay: 1600,
			
			
			 
		});
	});
</script>

<section class=" w-screen pt-28 md:pb-24 pb-12">
	<!-- <div class="h-[7.5rem] md:h-[11.9rem]  opacity-50 w-full hero-bg block" /> -->
	<div
		class="hero h-full flex flex-col-reverse xl:flex-row md:items-center !justify-center gap-8 md:gap-12 lg:gap-24 px-6 md:px-12"
	>
		<div class="max-w-3xl lg:max-w-full xl:!max-w-3xl xl:mx-0 mx-auto">
			<h1
				class="font-head text-5xl md:text-center xl:text-left md:text-6xl lg:text-8xl font-medium hero-text" style="opacity: 0; transform: translateX(-100px)"
			>
				I'm Michael, a <span class="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-transparent bg-clip-text fr">Frontend</span>
				<span class="font-semibold">Web Dev</span>
				and <i>オタク</i> <small class="italic">(Otaku)</small>
			</h1>
		</div>
		<div class="w-32 h-32 md:w-48 md:mx-auto xl:mx-0 md:h-48 lg:w-60 lg:h-60 relative hero-main transform" style="transform: scale(0);">
			<div
				class=" w-full scale-105 z-50 absolute h-full border-4 rounded-3xl !overflow-hidden  border-black"
			>
			
				<img src={urlFor('https://cdn.sanity.io/images/5xp71fus/production/462f8ea980a41f137d6521cda52094f5e26c6b5b-864x1152.jpg').format('webp').size(500, 500).url()} alt="A portrait of me" />
			</div>
			<div
				class=" w-full hero-1 bg-blue-200 z-10 h-full absolute border-4 rounded-3xl overflow-hidden border-black card-wrapper"
			/>
			<div
				class="hero-2 w-full  bg-pink-200  h-full absolute border-4 rounded-3xl overflow-hidden border-black card-wrapper"
			/>
		</div>
	</div>
</section>

