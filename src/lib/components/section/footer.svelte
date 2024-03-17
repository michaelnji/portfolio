<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Layered from './../display/layered.svelte';
	import Contact from './contact.svelte';
	let el: HTMLElement;
</script>

<Layered />
<div class="w-full bg-primary p-12 border-t-2 border-primary">
	<div class="footer" />
	<div class="mb-24 contact" style="transform:scale(0)">
		<Contact />
	</div>
	<footer class="flex gap-3 md:gap-6 flex-wrap items-center justify-center xl:justify-start">
		<div class="flex md:gap-6 gap-3 items-center">
			<div class="bg-gray-50 dark:bg-gray-900 p-3 md:p-6 rounded-xl md:rounded-2xl">
				<div class="loader w-[20px] md:w-[45px]" />
			</div>
			<div>
				<h2
					class="font-head font-bold overflow-hidden text-purple-50 text-xl name-text md:text-3xl"
					style=" transform:translateY(40px); opacity:0; "
				>
					Michael Nji
				</h2>
				<IntersectionObserver
					element={el}
					on:intersect={() => {
						anime({
							targets: `.contact`,
							scale: 1,
							duration: 1000
						});
						anime({
							targets: `.name-text`,
							opacity: {
								delay: 200,
								value: 1
							},
							translateY: 0,
							duration: 1600
						});
						anime({
							targets: `.name-desc`,
							opacity: {
								delay: 400,
								value: 1
							},
							translateY: 0,
							duration: 1600
						});
					}}
				>
					<p
						bind:this={el}
						class="text-lg name-desc md:text-xl opacity-70 font-semibold text-purple-100"
						style=" transform:translateY(-40px); opacity:0; "
					>
						Web Developer
					</p>
				</IntersectionObserver>
			</div>
		</div>
	</footer>
</div>

<style>
	/* HTML: <div class="loader"></div> */
	.loader {
		aspect-ratio: 1;
		--c: no-repeat linear-gradient(#715df2 0 0);
		background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 50%, var(--c) 100% 0, var(--c) 100% 100%;
		animation: l13 2s infinite alternate ease-in;
	}

	@keyframes l13 {
		0%,
		10% {
			background-size: 20% 100%;
		}
		50% {
			background-size: 20% 20%;
		}
		90%,
		100% {
			background-size: 100% 20%;
		}
	}
</style>
