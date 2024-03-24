<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import metadata from '$lib/stores/metadata';
	import { confetti } from '@neoconfetti/svelte';
	let heartConfettiStatus: string | boolean = false;
	let shitConfettiStatus: string | boolean = false;
	let clapsConfettiStatus: string | boolean = false;
	async function UpdateReactions(reaction: string) {
		let data = {
			...$metadata
		};
		if (reaction === 'hearts') {
			heartConfettiStatus = 'loading';
			data.reactions.hearts = data.reactions.hearts + 1;
		}
		if (reaction === 'shit') {
			shitConfettiStatus = 'loading';
			data.reactions.shit = data.reactions.shit + 1;
		}
		if (reaction === 'claps') {
			clapsConfettiStatus = 'loading';

			data.reactions.claps = data.reactions.claps + 1;
		}
		data = JSON.stringify({
			data,
			id: data.id
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

			if (reaction === 'shit') {
				shitConfettiStatus = true;
				setTimeout(() => {
					shitConfettiStatus = !shitConfettiStatus;
				}, 3500);
			}

			if (reaction === 'claps') {
				clapsConfettiStatus = true;
				setTimeout(() => {
					clapsConfettiStatus = !clapsConfettiStatus;
				}, 3500);
			}

			$metadata = { ...parsedRes.data };
		}
	}
</script>

<h1 class="mb-4 m-0 text-xl w-full font-semibold max-w-max">Love this post? Show some grrr!</h1>
<div class="w-full max-w-sm md:max-w-xl grid grid-cols-2 md:grid-cols-4 gap-3">
	<div
		class="shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-primary dark:bg-gray-900 dark:text-purple-400 text-primary bg-opacity-10 flex items-center space-x-2 p-4 justify-center text-lg font-mono font-bold"
	>
		<span class="">{numToSummary($metadata.views)}</span><span>views</span>
	</div>

	<div
		class="shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900 p-4 flex justify-center hover:!bg-black hover:text-white transition duration-300 cursor-pointer relative overflow-hidden"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('hearts');
		}}
	>
		{#if heartConfettiStatus === 'loading'}
			<span
				class="absolute bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"
				><div class="loader" /></span
			>
		{/if}
		<div class="flex items-center space-x-2">
			<span class="text-2xl md:text-3xl"> 💜</span>
			<span class="text-xl font-mono font-bold">
				{numToSummary($metadata.reactions.hearts)}
				{#if heartConfettiStatus && heartConfettiStatus !== 'loading'}
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
		{#if shitConfettiStatus === 'loading'}
			<span
				class="absolute bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"
				><div class="loader" /></span
			>
		{/if}
		<div class="flex items-center space-x-2">
			<span class="text-2xl md:text-3xl"> 💩</span>
			<span class="text-xl font-mono font-bold">
				{numToSummary($metadata.reactions.shit)}
				{#if shitConfettiStatus && shitConfettiStatus !== 'loading'}
					<div use:confetti={{ particleCount: 100, force: 0.5, stageWidth: 500 }} />
				{/if}
			</span>
		</div>
	</div>
	<div
		class=" shadow-xl border border-gray-300 dark:border-gray-800 hover:shadow-lg rounded-2xl bg-white dark:bg-gray-900 p-4 flex justify-center hover:!bg-black hover:text-white transition duration-300 cursor-pointer relative overflow-hidden"
		role="button"
		tabindex="0"
		on:keydown
		on:click|trusted|once={async () => {
			await UpdateReactions('claps');
		}}
	>
		{#if clapsConfettiStatus === 'loading'}
			<span
				class="absolute bg-black top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden left-0"
				><div class="loader" /></span
			>
		{/if}
		<div class="flex items-center space-x-2">
			<span class="text-2xl md:text-3xl"> 👏</span>
			<span class="text-xl font-mono font-bold">
				{numToSummary($metadata.reactions.claps)}
				{#if clapsConfettiStatus && clapsConfettiStatus !== 'loading'}
					<div use:confetti={{ particleCount: 100, force: 0.5, stageWidth: 500 }} />
				{/if}
			</span>
		</div>
	</div>
</div>

<style>
	.loader {
		width: 10px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: #f10c49;
		animation: loaing-animation 1.5s infinite;
	}
	@keyframes loaing-animation {
		0%,
		100% {
			transform: translate(-20px);
			box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
		}
		40% {
			transform: translate(20px);
			box-shadow: -7px 0 #f4dd51, -10px 0 #e3aad6;
		}
		50% {
			transform: translate(20px);
			box-shadow: 0 0 #f4dd51, 0 0 #e3aad6;
		}
		90% {
			transform: translate(-20px);
			box-shadow: 7px 0 #f4dd51, 10px 0 #e3aad6;
		}
	}
</style>
