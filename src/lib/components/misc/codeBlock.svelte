<script>
	import { fade } from 'svelte/transition';
	import Check from 'svelte-heros-v2/Check.svelte';
	import Square2Stack from 'svelte-heros-v2/Square2Stack.svelte';
	import Highlight, { HighlightAuto, HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import { copyToClipboard } from '$lib/utils/index';
	/**
	 * @type {any}
	 */
	export let portableText;
	$: ({ value } = portableText);
	$: ({ language, code } = value);
	let copySuccess = false;

	function copyCode() {
		copyToClipboard(code.toString()).then((result) => {
			if (result === 'success') {
				copySuccess = true;
				setTimeout(() => {
					copySuccess = false;
				}, 1500);
			}
		});
	}
</script>

<div class="card-wrapper rounded-3xl transition duration-300 ease-in-out !font-mono relative bg-gray-500">
	{#if language == 'css'}
		<Highlight language={css} {code} />
	{:else if language == 'jsx'}
		<HighlightSvelte {code} />
	{:else}
		<HighlightAuto {code} />
	{/if}
	<button
		on:click={copyCode}
		class="py-1 px-2 absolute top-3 right-3 text-xs text-gray-200 rounded active:scale-95 transition-transform duration-200"
	>
		{#key copySuccess}
			{#if copySuccess}
				<div class="flex items-center gap-x-2 font-bold" in:fade>
					<b class="hidden md:inline">copied</b>
					<Check class="focus:!outline-none text-green-500" />
				</div>
			{:else}
				<div class="flex items-center gap-x-2 font-bold" in:fade>
					<b class="hidden md:inline">copy</b>
					<Square2Stack class="focus:!outline-none" />
				</div>
			{/if}
		{/key}
	</button>
</div>

<style>
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
