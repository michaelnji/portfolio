<script lang="ts">
	import  Typescript from "svelte-simples/Typescript.svelte";
	import  Svelte from "svelte-simples/Svelte.svelte";
	import  Supabase from "svelte-simples/Supabase.svelte";
	import  Python from "svelte-simples/Python.svelte";
	import  {fly} from 'svelte/transition';
	import i from '$lib/images/myke.webp';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { easeInOutBack } from '$lib/utils/animations';
	onMount(() => {
		anime({
			targets: '.hero-img',
			opacity: {
				value: 1,
				duration: 1500
			},
			translateY: '0px',
			delay: 1500
		});
		anime({
			targets: '.hero-img-sm',
			opacity: {
				value: 1,
				duration: 1500
			},
			translateY: '0px',
			delay: 1200
		});
	});
</script>

<div class="flex w-full gap-x-12 items-center justify-between">
	<div
		class=" bg-primary overflow-hidden border-4 border-gray-900 hero-img mb-6 rounded-3xl w-[7rem] md:w-[12rem]  hidden xl:!block"
		style="opacity:0; transform:translateY(38px);"
	>
		<img src={i} alt="" class="w-[7rem] md:w-[12rem] aspect-square" loading="lazy" />
	</div>
	<div
		class=" block xl:!hidden bg-primary overflow-hidden border-4 border-gray-900 hero-img-sm mb-6 rounded-3xl w-[7rem] md:w-[12rem]"
		style="opacity:0; transform:translateY(38px);"
	>
		<img src={i} alt="" class="w-[7rem] md:w-[12rem] aspect-square" loading="lazy" />
	</div>
	<div
		class="md:flex xl:hidden gap-x-3 hidden transform !scale-75 xl:!scale-100"
		
	>
		<div class="flex flex-col justify-between gap-3 -rotate-12 mb-3 container-a" >
			<span in:fly={{ y: 100, delay: 700, duration:500, easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Typescript width="40" height="40" color="#228be6" />
			</span>
			<span in:fly={{ y: 100, delay: 900, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Python width="40" height="40" color="#3498db" />
			</span>
		</div>
		<div class="flex flex-col justify-between gap-3 -rotate-12 mb-3" >
			<span in:fly={{ y: 100, delay: 1100, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Supabase width="40" height="40" color="#51cf66" /> supabase
			</span>
			<span in:fly={{ y: 100, delay: 1300, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Svelte width="40" height="40" color="#ff922b" /> Svelte
			</span>
		</div>
	</div>
	<div
		class="md:hidden xl:flex gap-x-3 hidden transform !scale-75 xl:!scale-100"
		
	>
		<div class="flex flex-col justify-between gap-3 -rotate-12 mb-3 container-a" >
			<span in:fly={{ y: 100, delay: 1700, duration:500, easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Typescript width="40" height="40" color="#228be6" />
			</span>
			<span in:fly={{ y: 100, delay: 1900, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Python width="40" height="40" color="#3498db" />
			</span>
		</div>
		<div class="flex flex-col justify-between gap-3 -rotate-12 mb-3" >
			<span in:fly={{ y: 100, delay: 2100, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Supabase width="40" height="40" color="#51cf66" /> supabase
			</span>
			<span in:fly={{ y: 100, delay: 2300, duration:500 , easing: easeInOutBack}}
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Svelte width="40" height="40" color="#ff922b" /> Svelte
			</span>
		</div>
	</div>
</div>
