<script lang="ts">
	// import { Bars3Solid } from "svelte-heros-v2/Bars3.svelte";
	import { page } from '$app/stores';
	import { setItemValue } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import anime from 'animejs';
	import  XMark  from 'svelte-heros-v2/XMark.svelte';
	import  Bars3Solid  from 'svelte-heros-v2/Bars3.svelte';
	import Moon from 'svelte-heros-v2/Moon.svelte';
	import Sun from 'svelte-heros-v2/Sun.svelte';
	import { scale } from 'svelte/transition';
	let closeModal = false;
	function toggleTheme(): void {
		if ($theme === 'dark') {
			$theme = setItemValue('theme', 'light');
			setTimeout(() => {
				toggleModal();
			}, 200);
			return;
		}
		$theme = setItemValue('theme', 'dark');
		setTimeout(() => {
			toggleModal();
		}, 200);
	}
	function toggleThemeMd(): void {
		if ($theme === 'dark') {
			$theme = setItemValue('theme', 'light');
			
			return;
		}
		$theme = setItemValue('theme', 'dark');
	}
	$: currentSection = $page.url.pathname;
	
	function toggleModal() {
		closeModal = !closeModal;
		if (!closeModal) {
			anime({
				targets: '.nv',
				translateX: '200%',

				easing: 'easeInSine',
				duration: 700
			});
		} else {
			anime({
				targets: '.nv',
				translateX: 0,
				easing: 'easeOutSine',
				duration: 700
			});
		}
	}
</script>

<div class="hidden md:block w-full">
	<div
	class="min-w-screen p-6 !z-10 fixed top-0  left-0 right-0 glass   flex flex-col items-stretch"
>
	<div class=" w-full flex items-center justify-between ">
		
	
	{#key currentSection}
	<h3 class="logo text-2xl font-head font-medium ">Michael Nji</h3>
	
		<nav class="    flex justify-center items-center gap-x-6 ">
			<a on:click={toggleModal}
				href="/"
				class="  font-semibold group relative font-head overflow-hidden"
				
				class:italic={currentSection === '/'}
			>
				<p class="font-bold text-xl">Home</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600   transition-transform duration-500 -translate-x-24 group-hover:translate-x-0"
					class:translate-x-0={currentSection === '/'}
					class:hover:!translate-x-14={currentSection === '/'}
				/>
			</a>
			<a on:click={toggleModal}
				href="/blog"
				class="  font-semibold group relative font-head overflow-hidden"
				
				class:italic={currentSection === '/blog'}
			>
				<p class="font-bold text-xl">Blog</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600   transition-transform duration-500 -translate-x-24 group-hover:translate-x-0"
					class:translate-x-0={currentSection === '/blog'}
					class:hover:!translate-x-14={currentSection === '/blog'}
				/>
			</a>
			<a on:click={toggleModal}
				href="https://www.github.com/michaelnji"
				target="_blank"
				class="  font-semibold group relative font-head overflow-hidden"
			>
				<p class="font-bold text-xl">Github</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600   transition-transform duration-500 -translate-x-24 group-hover:translate-x-0"
				/>
			</a>
			<a on:click={toggleModal}
				href="https://www.x.com/CodeD3vil"
				target="_blank"
				class="  font-semibold group relative font-head overflow-hidden"
			>
				<p class="font-bold text-xl">Twitter</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600   transition-transform duration-500 -translate-x-24 group-hover:translate-x-0"
				/>
			</a>
		</nav>
		<button on:click={toggleThemeMd}  class="group ">
		{#if $theme === 'light'}
			<div in:scale={{ duration: 400 }}>
				<Moon
					class="focus:!outline-none hidden md:block  "
					width="32"
					height="32"
					tabindex="-1"
				/>
				
			</div>
		{:else}
			<div in:scale={{ duration: 400 }}>
				<Sun
					class="focus:!outline-none hidden md:block   group-hover:"
					width="32"
					height="32"
					tabindex="-1"
				/>
				
			</div>
		{/if}
	</button>
	{/key}
	</div>
</div>

</div>

<div class="md:hidden">
	<div
	class="min-w-screen min-h-screen !z-50 fixed top-0 bottom-0 left-0 right-0 bg-black translate-x-[200%] nv flex flex-col items-stretch"
>
	<div class="p-6 w-full flex items-center justify-between ">
		<h3 class="logo text-2xl md:text-3xl font-head font-medium text-gray-100">Michael Nji</h3>
		<button on:click={toggleTheme} class="group ">
			{#if $theme === 'light'}
				<div in:scale={{ duration: 400 }}>
					<Moon
						class="focus:!outline-none hidden md:block text-gray-50 group-"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<Moon
						class="focus:!outline-none md:hidden  text-gray-50 group-"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{:else}
				<div in:scale={{ duration: 400 }}>
					<Sun
						class="focus:!outline-none hidden md:block  text-yellow-500 group-hover:text-gray-50"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<Sun
						class="focus:!outline-none md:hidden  text-gray-50 group-"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{/if}
		</button>
	</div>
	{#key currentSection}
		<nav class=" mt-12 w-full flex flex-col justify-center items-center gap-3 ">
			<a on:click={toggleModal}
				href="/"
				class=" text-gray-50 font-semibold group relative font-head overflow-hidden"
				
				class:italic={currentSection === '/'}
			>
				<p class="font-medium text-4xl">Home</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600 transition-transform  duration-500 -translate-x-24 group-hover:translate-x-0"
					class:translate-x-0={currentSection === '/'}
					class:hover:!translate-x-14={currentSection === '/'}
				/>
			</a>
			<a on:click={toggleModal}
				href="/blog"
				class=" text-gray-50 font-semibold group relative font-head overflow-hidden"
				
				class:italic={currentSection === '/blog'}
			>
				<p class="font-medium text-4xl">Blog</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600 transition-transform  duration-500 -translate-x-24 group-hover:translate-x-0"
					class:translate-x-0={currentSection === '/blog'}
					class:hover:!translate-x-14={currentSection === '/blog'}
				/>
			</a>
			<a on:click={toggleModal}
				href="https://www.github.com/michaelnji"
				target="_blank"
				class=" text-gray-50 font-semibold group relative font-head overflow-hidden"
			>
				<p class="font-medium text-4xl">Github</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600 transition-transform  duration-500 -translate-x-24 group-hover:translate-x-0"
				/>
			</a>
			<a on:click={toggleModal}
				href="https://www.x.com/CodeD3vil"
				target="_blank"
				class=" text-gray-50 font-semibold group relative font-head overflow-hidden"
			>
				<p class="font-medium text-4xl">Twitter</p>
				<p
					class="h-1 w-2/3 bg-gradient-to-r from-pink-600  to-purple-600 transition-transform  duration-500 -translate-x-24 group-hover:translate-x-0"
				/>
			</a>
		</nav>
	{/key}
	
</div>

<div class="navbar-wrapper !z-50">
	<button
		class="btn !z-20 md:btn-lg btn-primary overflow-hidden !rounded-none border border-gray-900 card-wrapper active:scale-90 transition"
		on:click={() => {
			toggleModal();
		}}
	>
		{#if !closeModal}
			<div in:scale={{ duration: 400 }}>
				<Bars3Solid
					class="focus:!outline-none hidden md:block"
					width="48"
					height="48"
					tabindex="-1"
				/>
				<Bars3Solid class="focus:!outline-none md:hidden" width="36" height="36" tabindex="-1" />
			</div>
		{:else}
			<div in:scale={{ duration: 400 }}>
				<XMark class="focus:!outline-none hidden md:block" width="48" height="48" tabindex="-1" />
				<XMark class="focus:!outline-none md:hidden" width="36" height="36" tabindex="-1" />
			</div>
		{/if}
	</button>
</div>
</div>




<style lang="postcss">
	.navbar-wrapper {
		@apply fixed bottom-4 flex flex-col   items-end gap-y-4  right-4;
	}
</style>
