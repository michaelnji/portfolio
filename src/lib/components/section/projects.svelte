<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Nodedotjs from 'svelte-simples/Nodedotjs.svelte';
	import Supabase from 'svelte-simples/Supabase.svelte';
	import Svelte from 'svelte-simples/Svelte.svelte';
	import Tailwindcss from 'svelte-simples/Tailwindcss.svelte';
	import Typescript from 'svelte-simples/Typescript.svelte';
	import Javascript from 'svelte-simples/Javascript.svelte';
	import Vue from 'svelte-simples/Vuedotjs.svelte';
	import Nuxt from 'svelte-simples/Nuxtdotjs.svelte';
	let el: HTMLElement;
</script>

<IntersectionObserver
	element={el}
	on:intersect={() => {
		anime({
			targets: '#projects .project',
			translateY: '0px',
			opacity: {
				value: 1,
				duration: 1200,
				delay: anime.stagger(250, { start: 400, easing: 'cubicBezier(.3, .4, .5, 1)' })
			},
			duration: 1900,
			delay: anime.stagger(250, { start: 400 })
		});
	}}
>
	<div class="py-12 xl:py-24" id="projects">
		<section class=" px-3 md:px-6">
			<h1 class="md:text-7xl w-full max-w-6xl mx-auto text-4xl font-medium font-head text-center">
				Some of my work
			</h1>
			<p class="mt-6 max-w-3xl mx-auto text-center text-xl md:text-2xl opacity-70">
				I have been working hard lately to build some pretty awesome stuff
			</p>
		</section>

		<section class="pt-12 md:pt-24 px-3 md:px-6">
			<div
				class="w-full md:max-w-xl lg:max-w-7xl mx-auto grid grid-cols-1 place-items-center lg:grid-cols-2 p gap-6 md:gap-12"
				bind:this={el}
			>
				<div
					class=" group project max-w-xl w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
					<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-purple-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-purple-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							<div class="w-full flex-col !justify-between gap-12 items-start">
								<div class="flex flex-wrap z-20 gap-3">
									<p
										class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm transition duration-1000"
									>
										Unfinished
									</p>
									<p
										class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm transition duration-1000"
									>
										SaaS
									</p>
									<p
										class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm transition duration-1000"
									>
										Website
									</p>
								</div>
							</div>
							<div class="mt-4">
								<h1 class="md:text-8xl text-5xl capitalize text-purple-50 font-medium font-retro">
									BytePay
								</h1>
								<p class="mt-3 font-medium text-purple-50 text-xl md:text-2xl opacity-90">
									A website to buy and create virtual credit cards in Cameroon This is the
									predecessor of Decko.
								</p>
								<div class="mt-4 p-6 rounded-2xl bg-purple-800 bg-opacity-20">
									<p class="font-medium text-purple-50 text-2xl opacity-90">Built using</p>
									<div class="flex flex-wrap gap-3 mt-3">
										<!-- <p
										class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
									>
										<Javascript width={'30'} height="30" />
									</p> -->
										<p
											class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
										>
											<Tailwindcss width={'30'} height="30" />
										</p>
										<p
											class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
										>
											<Supabase width={'30'} height="30" />
										</p>
										<p
											class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
										>
											<Nodedotjs width={'30'} height="30" />
										</p>

										<p
											class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
										>
											<Svelte width={'30'} height="30" />
										</p>
									</div>
									<div class="mt-8 flex gap-3">
										<a
											href="https://bytepay.vercel.app"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-purple-600"
											>Preview</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class=" group project max-w-xl w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
					<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-orange-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-orange-600 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							<div class="w-full flex-col !justify-between gap-12 items-start">
								<div class="flex flex-wrap z-20 gap-3">
									<p
										class="px-3 py-1 font-bold bg-orange-950 rounded-lg text-orange-300 text-sm transition duration-1000"
									>
										In Progress
									</p>
									<p
										class="px-3 py-1 font-bold bg-orange-950 rounded-lg text-orange-300 text-sm transition duration-1000"
									>
										Side Project
									</p>
									<p
										class="px-3 py-1 font-bold bg-orange-950 rounded-lg text-orange-300 text-sm transition duration-1000"
									>
										PWA
									</p>
								</div>
							</div>
							<div class="mt-4">
								<h1 class="md:text-8xl text-5xl capitalize text-orange-50 font-medium font-retro">
									Gruvvy
								</h1>
								<p class="mt-3 font-medium text-orange-50 text-xl md:text-2xl opacity-90">
									A simple mobile PWA used to track daily spending habits. Shows basic weekly
									statistics and works totally offline.
								</p>
								<div class="mt-4 p-6 rounded-2xl bg-orange-800 bg-opacity-20">
									<p class="font-medium text-orange-50 text-2xl opacity-90">Built using</p>
									<div class="flex flex-wrap gap-3 mt-3">
										<p
											class="p-2 font-bold text-orange-50 rounded-lg bg-orange-950 text-xs font-mono transition duration-1000"
										>
											<Javascript width={'30'} height="30" />
										</p>
										<p
											class="p-2 font-bold text-orange-50 rounded-lg bg-orange-950 text-xs font-mono transition duration-1000"
										>
											<Tailwindcss width={'30'} height="30" />
										</p>
										<p
											class="p-2 font-bold text-orange-50 rounded-lg bg-orange-950 text-xs font-mono transition duration-1000"
										>
											<Vue width={'30'} height="30" />
										</p>
									</div>
									<div class="mt-8 flex gap-3">
										<a
											href="https://gruvvy.vercel.app"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-orange-600"
											>Preview</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class=" group project max-w-xl w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
					<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-pink-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-pink-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							<div class="w-full flex-col !justify-between gap-12 items-start">
								<div class="flex flex-wrap z-20 gap-3">
									<p
										class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm transition duration-1000"
									>
										Completed
									</p>
									<p
										class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm transition duration-1000"
									>
										Contract
									</p>
									<p
										class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm transition duration-1000"
									>
										Website
									</p>
								</div>
							</div>
							<div class="mt-4">
								<h1 class="md:text-8xl text-5xl capitalize text-pink-50 font-medium font-retro">
									ATUD
								</h1>
								<p class="mt-3 font-medium text-pink-50 text-xl md:text-2xl opacity-90">
									A website for a small tire repair shop in the US. Built this for a friend of mine.
								</p>
								<div class="mt-4 p-6 rounded-2xl bg-pink-800 bg-opacity-20">
									<p class="font-medium text-pink-50 text-2xl opacity-90">Built using</p>
									<div class="flex flex-wrap gap-3 mt-3">
										<!-- <p
										class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
									>
										<Javascript width={'30'} height="30" />
									</p> -->
										<p
											class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
										>
											<Tailwindcss width={'30'} height="30" />
										</p>

										<p
											class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
										>
											<Nodedotjs width={'30'} height="30" />
										</p>

										<p
											class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
										>
											<Svelte width={'30'} height="30" />
										</p>
									</div>
									<div class="mt-8 flex gap-3">
										<a
											href="https://atuds-and-sons.vercel.app/"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-pink-600 text-xs"
											>Preview</a
										>
										<a
											href="https://github.com/michaelnji/rt-tire-and-brakes"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-black text-xs"
											>Github
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class=" group project max-w-xl w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
					<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-green-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-green-500 border-4 border-green-950 p-6 !rounded-2xl z-50"
						>
							<div class="w-full flex-col !justify-between gap-12 items-start">
								<div class="flex flex-wrap z-20 gap-3">
									<p
										class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm transition duration-1000"
									>
									In progres
									</p>
									<p
										class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm transition duration-1000"
									>
										Side Project
									</p>
									<p
										class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm transition duration-1000"
									>
										Blog
									</p>
								</div>
							</div>
							<div class="mt-4">
								<h1 class="md:text-8xl text-5xl capitalize text-green-50 font-medium font-retro">
									Gemma Fx
								</h1>
								<p class="mt-3 font-medium text-green-50 text-xl md:text-2xl opacity-90">
									A blog about forex trading, prop firm reviews and funded account coupon codes.
									Built this to document my passion for forex trading
								</p>
								<div class="mt-4 p-6 rounded-2xl bg-gray-800 bg-opacity-20">
									<p class="font-medium text-gray-50 text-2xl opacity-90">Built using</p>
									<div class="flex flex-wrap gap-3 mt-3">
										<p
											class="p-2 font-bold text-gray-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
										>
											<Typescript width={'30'} height="30" />
										</p>

										<p
											class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
										>
											<Nuxt width={'30'} height="30" />
										</p>
										<p
											class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
										>
											<Tailwindcss width={'30'} height="30" />
										</p>
									</div>
									<div class="mt-8 flex gap-3">
										<a
											href="https://gemmafx.vercel.app"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-green-600 text-xs"
											>visit blog</a
										>
										<a
											href="https://github.com/michaelnji/gemma_fx"
											target="_blank"
											class="btn btn-wrapper border-2 border-black !rounded-none !bg-black text-xs"
											>Github
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h1
				class="md:text-5xl mt-16 w-full max-w-6xl mx-auto text-2xl font-medium font-head text-center"
			>
				Honourable mentions
			</h1>
			<div class="mt-12 max-w-7xl justify-center mx-auto px-6 flex flex-wrap gap-6" >
				<a href="https://wazabills.vercel.app/" target="_blank">
				<div
					class=" group project max-w-max !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
						<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-purple-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-purple-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							
							<h2 class="font-head text-2xl md:text-4xl font-bold">waza</h2>
						</div>
					</div>
					
				</div>
			</a>
			<a href="https://anonymlol.site/" target="_blank">
				<div
					class=" group project max-w-max !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
						<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-blue-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-blue-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							
							<h2 class="font-head text-2xl md:text-4xl font-bold">anonym.lol</h2>
						</div>
					</div>
					
				</div>
			</a>
			<a href="https://kawaiii.vercel.app/" target="_blank">
				<div
					class=" group project max-w-max !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
						<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-pink-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-pink-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							
							<h2 class="font-head text-2xl md:text-4xl font-bold">kawaiii</h2>
						</div>
					</div>
					
				</div>
			</a>
			<a href="https://github.com/michaelnji/request-rat" target="_blank">
				<div
					class=" group project max-w-max !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
						<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-yellow-950 rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-yellow-500 border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							
							<h2 class="font-head text-2xl md:text-4xl font-bold">request-rat</h2>
						</div>
					</div>
					
				</div>
			</a>
			<a href="https://anonymlol.site/" target="_blank">
				<div
					class=" group project max-w-max !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
						<div class="w-full h-full relative">
						<div
							class=" w-full h-full -z-10 absolute bg-black border-4 border-white rounded-2xl"
						/>
						<div
							class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150 bg-white border-4 border-gray-950 p-6 !rounded-2xl z-50"
						>
							
							<h2 class="font-head text-2xl md:text-4xl font-bold">viewtree</h2>
						</div>
					</div>
					
				</div>
			</a>
			</div>

		</section>
	</div>
</IntersectionObserver>

<style>
	/* .kawaiii-bg:hover{
		background: url('../../images/kawaiii.webp') !important;
		background-repeat: repeat !important;
}
	.byte-bg:hover{
		background: url('../../images/bytepay.webp') !important;
		background-repeat: repeat !important;
} */
</style>
