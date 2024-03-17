<script lang="ts">
	import { page } from '$app/stores';
	import { setItemValue } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import Sun from 'svelte-heros-v2/Sun.svelte';
	import Moon from 'svelte-heros-v2/Moon.svelte';
	import XMark from 'svelte-heros-v2/XMark.svelte';
	import Bars3Solid from 'svelte-heros-v2/Bars3.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	let closeModal: boolean = false;
	function toggleTheme(): void {
		if ($theme === 'dark') {
			$theme = setItemValue('theme', 'light');
			closeModal = !closeModal;
			return;
		}
		$theme = setItemValue('theme', 'dark');
		closeModal = !closeModal;
	}
	$: currentSection = $page.url.pathname;
	onMount(()=>{
		anime({
			targets:'.navbar-wrapper',
			scale:1
		})
	})
</script>

<div class="navbar-wrapper !z-50" style="transform: scale(0);">
	{#if closeModal}
		<div
			class="navbar-container rounded-3xl card-wrapper dark:!bg-base-200 dark:!text-gray-50"
			in:fly={{ y: 200 }}
			out:fade={{ duration: 100 }}
			on:blur={() => {
				closeModal = !closeModal;
			}}
		>
			<div class="nav-start justify-between flex items-center w-full">
				<div>
					<a
						href="/"
						class="logo !duration-300"
						on:click={() => {
							closeModal = !closeModal;
						}}><span class="font-extrabold text-primary">マイケル</span> Nji</a
					>
				</div>
				<button
					class="btn btn-ghost dark:!text-gray-50 shadow-lg overflow-hidden !rounded-2xl dark:hover:!bg-gray-50 dark:hover:!bg-opacity-5"
					on:click={toggleTheme}
				>
					{#key $theme}
						{#if $theme == 'light'}
							<div in:scale={{ duration: 400 }}>
								<Moon
									class="focus:!outline-none"
									width="24"
									height="24"
									tabindex="-1"
								/>
							</div>
						{:else}
							<div in:scale={{ duration: 400 }}>
								<Sun
									class="focus:!outline-none"
									width="24"
									height="24"
									tabindex="-1"
								/>
							</div>
						{/if}
					{/key}
				</button>
			</div>
			<div class="divider dark:!border-gray-700" />
			<nav class="nav-center">
				<ul>
					<li>
						<a
							href="/#about"
							class:dark:text-purple-50={currentSection === '/#about'}
							class="nav-item"
							class:!bg-primary={currentSection === '/#about'}
							class:!bg-opacity-30={currentSection === '/#about'}
							class:!text-primary={currentSection === '/#about'}
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							ABOUT
						</a>
					</li>
					<li>
						<a
							class:dark:text-purple-50={currentSection === '/#projects'}
							class:bg-primary={currentSection === '/#projects'}
							class:bg-opacity-30={currentSection === '/#projects'}
							class:text-primary={currentSection === '/#projects'}
							href="/#projects"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							PROJECTS
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/blog'}
							class:bg-opacity-30={currentSection === '/blog'}
							class:text-primary={currentSection === '/blog'}
							class:dark:text-purple-50={currentSection === '/blog'}
							class:rounded-2xl={currentSection === '/blog'}
							href="/blog"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							BLOG
						</a>
					</li>
					<li>
						<a href="https://github.com/michaelnji" class="nav-item"> GITHUB </a>
					</li>
				</ul>
			</nav>
			<div class="divider dark:!border-gray-700" />
			<div class="nav-end">
				<p class="text-xs px-3 opacity-70">Designed and developed in CMR with 💻 & 🎧</p>
			</div>
		</div>
	{/if}
	<button
		class="btn !z-20 md:btn-lg btn-primary overflow-hidden !rounded-2xl border border-gray-900 card-wrapper active:scale-90 transition"
		on:click={() => {
			closeModal = !closeModal;
		}}
	>
		{#key closeModal}
			{#if !closeModal}
				<div in:scale={{ duration: 400 }}>
					<Bars3Solid
						class="focus:!outline-none hidden md:block"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<Bars3Solid
						class="focus:!outline-none md:hidden"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{:else}
				<div in:scale={{ duration: 400 }}>
					<XMark
						class="focus:!outline-none hidden md:block"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<XMark
						class="focus:!outline-none md:hidden"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{/if}
		{/key}
	</button>
</div>

<style lang="postcss">
	.navbar-wrapper {
		@apply fixed bottom-4 flex flex-col   items-end gap-y-4  right-4;
	}
	.navbar-container {
		@apply bg-white border-2 border-gray-900  py-6 px-3  w-full flex flex-col items-start gap-y-2 transition ease-in-out duration-300;
	}
	.logo {
		@apply font-head text-xl;
	}
	.nav-center ul {
		@apply flex flex-col gap-1 w-full;
	}
	.nav-center ul li a {
		@apply flex items-center gap-x-3 p-3 w-full;
	}
	.nav-center ul li {
		@apply rounded-2xl p-1 cursor-pointer;
	}

	.nav-center ul li:hover {
		@apply bg-base-300 text-base-300 bg-opacity-10;
	}
	.dark .nav-center ul li:hover {
		@apply bg-gray-50 text-gray-50 bg-opacity-10;
	}
	.nav-center {
		@apply mt-4 w-full;
	}
	.nav-end {
		@apply mt-4 w-full;
	}
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
