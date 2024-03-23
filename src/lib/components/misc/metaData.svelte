<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';

	// import type { PostMetaData } from "$lib/types";
	import metadata from '$lib/stores/metadata';
	import { confetti } from '@neoconfetti/svelte';
	import Eye from 'svelte-heros-v2/Eye.svelte';
	let showHeartConfetti:string|boolean = false;
	let showShitConfetti:string|boolean = false;
	let showClapsConfetti:string|boolean = false;
	async function UpdateReactions(reaction: string) {
		let data = {
			...$metadata
		};
		if (reaction === 'hearts') {
			showHeartConfetti = 'loading'
			data.reactions.hearts = data.reactions.hearts + 1;}
		if (reaction === 'shit') {
			showShitConfetti = 'loading'
			data.reactions.shit = data.reactions.shit + 1};
			if (reaction === 'claps') {
			showClapsConfetti = 'loading'
			
			data.reactions.claps = data.reactions.claps + 1;}
		data = JSON.stringify({
				data,
				id: data.id
			})
		const res = await fetch('/api/reactions/add', {
			method: 'POST',
			body: data
		});
		const parsedRes = await res.json();
		if(parsedRes.status === 200){
			if (reaction === 'hearts') {
				showHeartConfetti = true
			setTimeout(() => {
				showHeartConfetti = !showHeartConfetti;
			}, 3500);
			}
			
		if (reaction === 'shit') {
			showShitConfetti = true
		setTimeout(() => {
				showShitConfetti = !showShitConfetti;
			}, 3500);
		}
			
			if (reaction === 'claps') {
				showClapsConfetti = true
				setTimeout(() => {
				showClapsConfetti = !showClapsConfetti;
			}, 3500);
			}
			
			$metadata = {...parsedRes.data}

		}
		
	}
	
</script>
<h1 class="mb-4 m-0 text-xl w-full font-semibold  max-w-max">Love this post? Show some grrr!</h1>
<div
	class="w-full max-w-sm md:max-w-xl  grid grid-cols-2 md:grid-cols-4 gap-3  "
>
	<div
		class="shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900 flex items-center space-x-2 p-4 justify-center"
	>
		<Eye /> <span class="text-xl  font-mono font-bold">{numToSummary($metadata.views)}</span>
	</div>

	<div
		class="shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900  p-4 flex justify-center hover:!bg-black hover:text-white transition duration-300 cursor-pointer relative overflow-hidden"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('hearts');
			
		}}
	>
{#if showHeartConfetti === 'loading' }
	<span  class="absolute   bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"><div class="loader"></div></span>
{/if}
		<div class="flex items-center space-x-2">
			<span class="text-2xl md:text-3xl"> 💜</span>
		<span class="text-xl  font-mono font-bold">
			{numToSummary($metadata.reactions.hearts)}
			{#if showHeartConfetti && showHeartConfetti !== 'loading'}
				<div use:confetti={{ particleCount: 100, force: 0.5, stageWidth: 500 }} />
			{/if}
		</span>
		</div>
	</div>
	<div
		class="shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900 flex items-center space-x-2 p-4 justify-center hover:!bg-black hover:text-white transition duration-300 cursor-pointer relative overflow-hidden"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('shit');
			
		}}
	>
	{#if showShitConfetti === 'loading' }
	<span  class="absolute  bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"><div class="loader"></div></span>
{/if}
		<div class="flex items-center space-x-2">
		<span class="text-2xl md:text-3xl"> 💩</span>
		<span class="text-xl  font-mono font-bold">
			{numToSummary($metadata.reactions.shit)}
			{#if showShitConfetti && showShitConfetti !== 'loading'}
				<div use:confetti={{ particleCount: 100, force: 0.5, stageWidth: 500 }} />
			{/if}
		</span> </div>
	</div>
	<div
		class=" shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900  p-4 flex justify-center hover:!bg-black hover:text-white transition duration-300 cursor-pointer relative overflow-hidden"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('claps');
			
		}}
	>
	{#if showClapsConfetti === 'loading' }
	<span  class="absolute   bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"><div class="loader"></div></span>
{/if}
		<div class="flex items-center space-x-2">
		<span class="text-2xl md:text-3xl"> 👏</span>
		<span class="text-xl  font-mono font-bold">
			{numToSummary($metadata.reactions.claps)}
			{#if showClapsConfetti && showClapsConfetti !== 'loading'}
				<div use:confetti={{ particleCount: 100, force: 0.5, stageWidth: 500 }} />
			{/if}
		</span></div>
	</div>
</div>
<style>
	/* HTML: <div class="loader"></div> */
.loader {
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #F10C49;
  animation: l2 1.5s infinite;
}
@keyframes l2 {
  0%,
  100%{transform:translate(-20px);box-shadow:  0     0 #F4DD51, 0     0 #E3AAD6}
  40% {transform:translate( 20px);box-shadow: -7px  0 #F4DD51,-10px  0 #E3AAD6}
  50% {transform:translate( 20px);box-shadow:  0     0 #F4DD51, 0     0 #E3AAD6}
  90% {transform:translate(-20px);box-shadow:  7px  0 #F4DD51, 10px  0 #E3AAD6}
}
</style>