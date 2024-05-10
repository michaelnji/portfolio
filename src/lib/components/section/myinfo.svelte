<script lang="ts">
	import { numToSummary } from '$lib/scripts/numberFunctions';
	import BugAnt from 'svelte-heros-v2/BugAnt.svelte';
	import FolderPlus from 'svelte-heros-v2/FolderPlus.svelte';
	import CommandLine from 'svelte-heros-v2/CommandLine.svelte';
	import ServerStack from 'svelte-heros-v2/ServerStack.svelte';
	import Star from 'svelte-heros-v2/Star.svelte';
	import OutlineLayered from '../display/outlineLayered.svelte';
	export let userInfo;
</script>

<OutlineLayered />
<div class=" md:p-12 p-3 py-12 bg-primary grid grid-cols-1 place-items-center">
	<div
		class="bg-gray-50 p-6 border-4 transition duration-300 border-black card-wrapper max-w-2xl grid gap-6 relative"
	>
		<div
			class="p-3 px-9 text-sm md:text-xl font-bold absolute md:-right-16 md:top-2 -right-12 top-2 rotate-[25deg] font-head bg-black rounded-full text-white max-w-max"
		>
			My Github Stats
		</div>
		<div class="rounded-2xl md:size-48 size-24 overflow-hidden bg-primary">
			<img src={userInfo.avatar} alt="michaelnji github profile" />
		</div>
		<div class=" space-y-6">
			<div class="flex items-center gap-2">
				<h2 class="font-head !text-gray-950 text-3xl font-bold">
					{userInfo.name}
				</h2>
				<span
					class="rounded-lg bg-gray-400 bg-opacity-20 text-gray-950 py-0.5 px-3 flex items-center font-bold justify-center gap-2 text-sm sm:text-base"
				>
					{numToSummary(userInfo.followers)} followers</span
				>
			</div>
			<div class="rounded-xl max-w-2xl md:text-xl text-base prose bg-gray-200 p-4">
				<span class="font-bold">Bio</span>
				<br />
				{userInfo.bio}
			</div>
			<div class="w-full flex flex-wrap gap-3">
				<div class="rounded-xl flex-1 bg-primary text-white p-6 space-y-2  ">
					<ServerStack size="40" />
					<h2 class="font-head text-5xl font-bold">
						{userInfo.repos}
					</h2>
					<span>REPOSITORIES</span>
				</div>

				<div class="rounded-xl flex-1 bg-black text-white p-6 space-y-2 ">
					<Star size="40" />
					<h2 class="font-head text-5xl font-bold">
						{numToSummary(userInfo.totalStars)}
					</h2>
					<span>STARS</span>
				</div>
				<div class="rounded-xl flex-1 bg-red-600 text-white p-6 space-y-2 ">
					<BugAnt size="40" />
					<h2 class="font-head text-5xl font-bold">
						{numToSummary(userInfo.totalIssues)}
					</h2>
					<span>ISSUES</span>
				</div>
				<div class="rounded-xl flex-1 bg-green-700 text-white p-6 space-y-2 ">
					<FolderPlus size="40" />
					<h2 class="font-head text-5xl font-bold">
						{numToSummary(userInfo.totalForks)}
					</h2>
					<span>FORKS</span>
				</div>
				<div class="rounded-xl flex-1 bg-yellow-300 text-yellow-950 p-6 space-y-2 ">
					<CommandLine size="40" />
					<h2 class="font-head text-5xl font-bold">
						{numToSummary(userInfo.totalCommitCounts)}
					</h2>
					<span>COMMITS</span>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="transform rotate-180 -translate-y-2">
	<OutlineLayered />
</div>

<style>
</style>
