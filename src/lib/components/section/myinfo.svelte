<script lang="ts">
	import { scale } from 'svelte/transition';
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import BugAnt from 'svelte-heros-v2/BugAnt.svelte';
	import FolderPlus from 'svelte-heros-v2/FolderPlus.svelte';
	import CommandLine from 'svelte-heros-v2/CommandLine.svelte';
	import ServerStack from 'svelte-heros-v2/ServerStack.svelte';
	import Star from 'svelte-heros-v2/Star.svelte';
	import OutlineLayered from '../display/outlineLayered.svelte';
	let el: HTMLElement;
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { useQuery } from '@sveltestack/svelte-query';

	// const queryClient = useQueryClient()

	async function fetchData() {
		const res = await fetch('/api/github', { method: 'GET' });
		const data = await res.json();

		return data;
	}
	const data = useQuery('github-info', fetchData);
	console.log($data.data);
</script>

{#if $data && !$data.isError}
	<OutlineLayered />
	<div class=" md:p-12 p-3 min-h-dvh py-14 bg-primary grid grid-cols-1 place-items-center">
		{#if $data.isSuccess}
			<IntersectionObserver
				element={el}
				on:intersect={() => {
					anime({
						targets: '.myinfo',
						translateY: '0px',
						opacity: 1,
						duration: 1500,
						delay: 400
					});
				}}
			>
				<div bind:this={el} />
				<div
					class="bg-gray-50 p-6 border-4 border-black card-wrapper max-w-2xl grid gap-6 relative myinfo"
					style="opacity: 0; transform:translateY(100px)"
				>
					<div
						class="p-3 px-9 text-sm md:text-xl font-bold absolute md:-right-16 md:top-2 -right-12 top-2 rotate-[25deg] font-head bg-black rounded-full text-white max-w-max stamp"
					>
						My Github Stats
					</div>
					<div class="rounded-2xl md:size-48 size-24 overflow-hidden bg-primary">
						<img src={$data.data.avatar} alt="michaelnji github profile" />
					</div>
					<div class=" space-y-6">
						<div class="flex items-center gap-2">
							<h2 class="font-head !text-gray-950 text-3xl font-bold">
								{$data.data.name}
							</h2>
							<span
								class="rounded-lg bg-gray-400 bg-opacity-20 text-gray-950 py-0.5 px-3 flex items-center font-bold justify-center gap-2 text-sm sm:text-base"
							>
								{numToSummary($data.data.followers)} followers</span
							>
						</div>
						<div class="rounded-xl max-w-2xl md:text-xl text-base prose bg-gray-200 p-4">
							<span class="font-bold">Bio</span>
							<br />
							{$data.data.bio}
						</div>
						<div class="w-full flex flex-wrap gap-3">
							<div class="rounded-xl flex-1 bg-primary text-white p-6 space-y-2">
								<ServerStack size="40" />
								<h2 class="font-head text-5xl font-bold">
									{$data.data.repos}
								</h2>
								<span>REPOSITORIES</span>
							</div>

							<div class="rounded-xl flex-1 bg-black text-white p-6 space-y-2">
								<Star size="40" />
								<h2 class="font-head text-5xl font-bold">
									{numToSummary($data.data.totalStars)}
								</h2>
								<span>STARS</span>
							</div>
							<div class="rounded-xl flex-1 bg-red-600 text-white p-6 space-y-2">
								<BugAnt size="40" />
								<h2 class="font-head text-5xl font-bold">
									{numToSummary($data.data.totalIssues)}
								</h2>
								<span>ISSUES</span>
							</div>
							<div class="rounded-xl flex-1 bg-green-700 text-white p-6 space-y-2">
								<FolderPlus size="40" />
								<h2 class="font-head text-5xl font-bold">
									{numToSummary($data.data.totalForks)}
								</h2>
								<span>FORKS</span>
							</div>
							<div class="rounded-xl flex-1 bg-yellow-300 text-yellow-950 p-6 space-y-2">
								<CommandLine size="40" />
								<h2 class="font-head text-5xl font-bold">
									{numToSummary($data.data.totalCommitCounts)}
								</h2>
								<span>COMMITS</span>
							</div>
						</div>
					</div>
				</div>
			</IntersectionObserver>
		{:else}
			<div
				in:scale
				class="bg-gray-50 p-6 border-4 border-black card-wrapper max-w-2xl grid gap-2 place-items-center"
			>
				<div class="loader w-[25px] md:w-[30px]" />
				<div class="mt-3">
					<h2 class="font-head text-2xl text-center font-bold">Loading</h2>
				</div>
			</div>
		{/if}
	</div>
	<div class="transform rotate-180 -translate-y-2">
		<OutlineLayered />
	</div>
{/if}

<style>
</style>
