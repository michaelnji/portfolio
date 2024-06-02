<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import metadata from '$lib/stores/metadata';
	import Eye from 'svelte-heros-v2/Eye.svelte';
	import Heart from 'svelte-heros-v2/Heart.svelte';
	import Fire from 'svelte-heros-v2/Fire.svelte';
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
	<h1 class="mb-5 m-0 text-xl w-full font-semibold max-w-max "> Some stats on this post</h1>
<div class="w-max rounded-3xl max-w-sm md:max-w-xl flex gap-6 md:gap-x-12  flex-wrap items-center overflow-hidden mt-2 p-6 px-8 bg-white dark:bg-gray-900 shadow-xl">
	<div
		class="flex items-center justify-center rounded-xl text-lg transition duration-[400] group-hover:rotate-12"
	>
		<span class="text-xl md:text-2xl xl:text-3xl font-bold">{numToSummary($metadata.views)}</span>
		<div class=' rounded-full ml-2 group-hover:rotate-12 group-hover:scale-105 transition-transform'>

			<Eye variation='solid' size='27' class='hidden md:block'/>
			<Eye variation='solid' size='20' class='md:hidden'/>
		</div>
	</div>

	<div
		class="    cursor-pointer relative  flex items-center justify-center   gap-x-1 font-semibold text-lg transition duration-[400] group-hover:rotate-12 group"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('hearts');
		}}
	>
		
		<div class="flex items-center space-x-2">
			
			<span class="text-xl md:text-2xl xl:text-3xl  font-bold ">
				{numToSummary($metadata.hearts)}
				{#if heartConfettiStatus && heartConfettiStatus !== 'loading'}
<div use:confetti={{ particleCount: 20, force: 0.3, stageWidth: 500 }} />
				{/if}
			</span>
			<div class='bg-pink-600 text-pink-50   p-1.5 rounded-full ml-2 group-hover:rotate-12 group-hover:scale-105 transition-transform' class:vibrate={heartConfettiStatus == 'loading'}
			class:jello={heartConfettiStatus && heartConfettiStatus !== 'loading'}>
			<Heart variation='solid' size='27' class='hidden md:block'/>
			<Heart variation='solid' size='20' class='md:hidden'/>
			
			</div>
		</div>
	</div>

	<div
		class="      cursor-pointer relative  flex items-center justify-center   gap-x-1 font-semibold text-lg transition duration-[400] group-hover:rotate-12 group"
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
					<div use:confetti={{ particleCount: 20, force: 0.3, stageWidth: 500 }} />
				{/if}
			</span>
			<div class="bg-orange-100 text-orange-600  p-1.5 rounded-full ml-2 group-hover:-rotate-12 group-hover:scale-105 transition-transform"  class:vibrate={clapsConfettiStatus == 'loading'}
			class:jello={clapsConfettiStatus && clapsConfettiStatus !== 'loading'}>
			
			<Fire variation='solid' size='27' class='hidden md:block'/>
			<Fire variation='solid' size='20' class='md:hidden'/>
			</div>
		</div>
	</div>
	
</div>
{/if}


