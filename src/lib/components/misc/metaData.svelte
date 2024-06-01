<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import metadata from '$lib/stores/metadata';
	import Eye from 'svelte-heros-v2/Eye.svelte';
	import Heart from 'svelte-heros-v2/Heart.svelte';
	import Star from 'svelte-heros-v2/Star.svelte';
	import {confetti} from '@neoconfetti/svelte'
	let heartConfettiStatus: string | boolean = false;
	let clapsConfettiStatus: string | boolean = false;


	async function UpdateReactions(reaction: string) {

		let data = {
			...$metadata
		};
		if (reaction === 'hearts') {
			heartConfettiStatus = 'loading';
			data.hearts = data.hearts + 1;
			
		}
		
		if (reaction === 'claps') {
			clapsConfettiStatus = 'loading';
			data.claps = data.claps + 1;
			
		}
		data = JSON.stringify({
			data,
			postId:data.postId
		});
		const res = await fetch('/api/reactions/add', {
			method: 'POST',
			body: data
		});
		const parsedRes = await res.json();
		if (parsedRes.status === 200) {
			if (reaction === 'hearts') {
				heartConfettiStatus = true;
				setTimeout(() => {
					heartConfettiStatus = !heartConfettiStatus;
				}, 3500);
			}

			if (reaction === 'claps') {
				clapsConfettiStatus = true;
				setTimeout(() => {
					clapsConfettiStatus = !clapsConfettiStatus;
				}, 3500);
			}

			$metadata = { ...parsedRes.data };
		}else{
			if (reaction === 'hearts') {
				heartConfettiStatus = false;
				
			}

			if (reaction === 'claps') {
				clapsConfettiStatus = false;
				
			}
		}
	}
	
</script>

{#if $metadata }
	<h1 class="mb-5 m-0 text-xl w-full font-semibold max-w-max ">Show some luv on this post</h1>
<div class="w-full max-w-sm md:max-w-xl flex gap-3 flex-wrap">
	<div
		class="flex items-center justify-center rounded-xl   gap-x-3  text-lg transition duration-[400] group-hover:rotate-12 !py-1 px-4 bg-black text-gray-50 dark:bg-gray-50 dark:text-gray-950"
	>
		<span class="text-xl md:text-2xl xl:text-3xl font-bold">{numToSummary($metadata.views)}</span>
		<Eye variation='solid' size='40' class='hidden md:block'/>
		<Eye variation='solid' size='30'  class='md:hidden'/>
	</div>

	<div
		class=" p-4    cursor-pointer relative  flex items-center justify-center   gap-x-1 font-semibold text-lg transition duration-[400] group-hover:rotate-12 group"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('hearts');
		}}
	>
		
		<div class="flex items-center space-x-2">
			
			<span class="text-xl md:text-2xl xl:text-3xl font-bold">
				{numToSummary($metadata.hearts)}
				{#if heartConfettiStatus && heartConfettiStatus !== 'loading'}
<div use:confetti={{ particleCount: 20, force: 0.8, stageWidth: 500 }} />
				{/if}
			</span>
			<div class:vibrate={heartConfettiStatus == 'loading'}
			class:jello={heartConfettiStatus && heartConfettiStatus !== 'loading'}>
			<Heart variation='solid' size='40' class='text-pink-600 transition-transform duration-[400] group-hover:rotate-12 group-hover:scale-125 hidden md:block' />
			<Heart variation='solid' size='30' class='text-pink-600 transition-transform duration-[400] group-hover:rotate-12 group-hover:scale-125 md:hidden' />
			</div>
		</div>
	</div>

	<div
		class="  p-4    cursor-pointer relative  flex items-center justify-center   gap-x-1 font-semibold text-lg transition duration-[400] group-hover:rotate-12 group"
		role="button"
		
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('claps');
		}}
	>
		<div class="flex items-center space-x-2">
			
			<span class="text-xl md:text-2xl xl:text-3xl font-bold">
				{numToSummary($metadata.claps)}
				
				{#if clapsConfettiStatus && clapsConfettiStatus !== 'loading'}
					<div use:confetti={{ particleCount: 20, force: 0.8, stageWidth: 500 }} />
				{/if}
			</span>
			<div  class:vibrate={clapsConfettiStatus == 'loading'}
			class:jello={clapsConfettiStatus && clapsConfettiStatus !== 'loading'}>
			<Star variation='solid' size='40' class='text-yellow-500 transition-transform duration-[400] group-hover:-rotate-12 group-hover:scale-125 hidden md:block'/>
			<Star variation='solid' size='30' class='text-yellow-500 transition-transform duration-[400] group-hover:-rotate-12 group-hover:scale-125 md:hidden'/>
			</div>
		</div>
	</div>
	
</div>
{/if}


