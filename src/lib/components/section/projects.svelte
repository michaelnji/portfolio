<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Nodedotjs  from "svelte-simples/Nodedotjs.svelte";
	import Javascript from 'svelte-simples/Javascript.svelte';
	import Supabase from "svelte-simples/Supabase.svelte";
	import Svelte from "svelte-simples/Svelte.svelte";
	import Tailwindcss from "svelte-simples/Tailwindcss.svelte";
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
				class="w-full md:max-w-7xl  mx-auto grid grid-cols-1 items-start  lg:grid-cols-2 p gap-6 md:gap-12"
				bind:this={el}
			>
				<div
					class=" group project w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
				<div class="w-full h-full relative">
					<div class=" w-full h-full -z-10 absolute bg-black border-4 border-purple-950 rounded-2xl ">
					
				</div>
					<div class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150  bg-purple-500 border-4 border-gray-950 p-6 !rounded-2xl  z-50">
						<div class="w-full flex-col !justify-between gap-12 items-start">
							<div class="flex flex-wrap z-20 gap-3">
								<p
									class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm  transition duration-1000"
								>
									Unfinished
								</p>
								<p
									class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm  transition duration-1000"
								>
									SaaS
								</p>
								<p
									class="px-3 py-1 font-bold bg-purple-950 rounded-lg text-purple-300 text-sm  transition duration-1000"
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
								A website to buy and create virtual credit cards in Cameroon This is the predecessor of SeaBridge.
							</p>
							<div class="mt-4 p-6 rounded-2xl bg-purple-800 bg-opacity-50">
								<p class="font-medium text-purple-50 text-2xl opacity-90">Built using</p>
								<div class="flex flex-wrap gap-3 mt-3">
									<p
										class="p-2 font-bold text-purple-50 rounded-lg bg-purple-950 text-xs font-mono transition duration-1000"
									>
										<Javascript width={'30'} height="30" />
									</p>
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
										class="btn btn-wrapper border-2 border-black btn-primary !rounded-none !bg-purple-600">Preview website</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div
					class=" group project w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
				<div class="w-full h-full relative">
					<div class=" w-full h-full -z-10 absolute bg-black border-4 border-green-950 rounded-2xl ">
					
				</div>
					<div class="  translate-x-1 -translate-y-2 lg:!shadow-0 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150  bg-green-500 border-4 border-gray-950 p-6 !rounded-2xl  z-50">
						<div class="w-full flex-col !justify-between gap-12 items-start">
							<div class="flex flex-wrap z-20 gap-3">
								<p
									class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm  transition duration-1000"
								>
									Completed
								</p>
								<p
									class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm  transition duration-1000"
								>
									Side Project
								</p>
								<p
									class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm  transition duration-1000"
								>
									Website
								</p>
							</div>
						</div>
						<div class="mt-4">
							<h1 class="md:text-8xl text-5xl capitalize text-green-50 font-medium font-retro">
								WABUZZ
							</h1>
							<p class="mt-3 font-medium text-green-50 text-xl md:text-2xl opacity-90">
								A website to grow your whatsapp views by automatically gaining active contacts. 
							</p>
							<div class="mt-4 p-6 rounded-2xl bg-green-800 bg-opacity-50">
								<p class="font-medium text-green-50 text-2xl opacity-90">Built using</p>
								<div class="flex flex-wrap gap-3 mt-3">
									<p
										class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
									>
										<Javascript width={'30'} height="30" />
									</p>
									<p
										class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
									>
										<Tailwindcss width={'30'} height="30" />
									</p>
									<p
										class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
									>
										<Supabase width={'30'} height="30" />
									</p>
									<p
										class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
									>
										<Nodedotjs width={'30'} height="30" />
									</p>

									<p
										class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
									>
										<Svelte width={'30'} height="30" />
									</p>
								</div>
								<div class="mt-8 flex gap-3">
									<a
										href="https://wabuzz.vercel.app"
										target="_blank"
										class="btn btn-wrapper border-2 border-black btn-primary !rounded-none !bg-green-600">Preview website</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div
					class=" group project w-full !rounded-2xl"
					style="opacity: 0; transform:translateY(100px)"
				>
				<div class="w-full h-full relative">
					<div class=" w-full h-full -z-10 absolute bg-black border-4 border-pink-950 rounded-2xl ">
					
				</div>
					<div class="  translate-x-1 -translate-y-2 lg:translate-x-3 lg:-translate-y-3 lg:group-hover:translate-x-4 lg:group-hover:-translate-y-4 transition duration-150  bg-pink-500 border-4 border-gray-950 p-6 !rounded-2xl  z-50">
						<div class="w-full flex-col !justify-between gap-12 items-start">
							<div class="flex flex-wrap z-20 gap-3">
								<p
									class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm  transition duration-1000"
								>
									Completed
								</p>
								<p
									class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm  transition duration-1000"
								>
									Side Project
								</p>
								<p
									class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm  transition duration-1000"
								>
									Website
								</p>
							</div>
						</div>
						<div class="mt-4">
							<h1 class="md:text-8xl text-5xl capitalize text-pink-50 font-medium font-retro">
								Kawaiii
							</h1>
							<p class="mt-3 font-medium text-pink-50 text-xl md:text-2xl opacity-90">
								A website that displays female manga characters. Built while I was learning Typescript for the first time.
							</p>
							<div class="mt-4 p-6 rounded-2xl bg-pink-800 bg-opacity-50">
								<p class="font-medium text-pink-50 text-2xl opacity-90">Built using</p>
								<div class="flex flex-wrap gap-3 mt-3">
									<p
										class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
									>
										<Javascript width={'30'} height="30" />
									</p>
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
										href="https://kawaiii.vercel.app"
										target="_blank"
										class="btn btn-wrapper border-2 border-black btn-primary !rounded-none !bg-pink-600">Preview website</a
									>
									<a
										href="https://github.com/michaelnji/kawaiii"
										target="_blank"
										class="btn btn-wrapper border-2 border-black btn-primary !rounded-none !bg-black">Github Repo</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				
				
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
