<script lang="ts">
	import { skills } from '$lib/utils/skills';
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Link from '../navigation/link.svelte';
	let element: HTMLElement;
	function animateEntry() {
		const items = document.querySelectorAll('.about-items');
		anime({
			targets: items,
			translateY: 0,
			opacity: 1,
			duration: 1200,
			delay: 600
			// easing: 'easeInQuad'
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={element} class="  w-screen flex items-start justify-center" id="about">
	<div class="w-full">
		<div class=" md:px-6">
			<IntersectionObserver
				{element}
				on:intersect={() => {
					animateEntry();
				}}
			>
				<div bind:this={element} />
				<div
					class="flex flex-col-reverse xl:flex-row items-center justify-center  xl:items-start gap-12 max-w-7xl mx-auto"
				>
					<div class="px-3 hidden xl:block md:px-0">
						<div
							class="  mx-auto w-full mb-[6rem] lg:mb-[9rem] border-4 border-black rounded-2xl card-wrapper max-h-[60rem] overflow-hidden md:max-w-2xl xl:max-w-md duration-300 about-items relative"
							style="opacity: 0; transform: translateY(150px)"
						>
							<div class="w-full h-full relative">
								<div
									class=" grid items-end bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 p-6"
								>
									<div>
										<img src="/dev.svg" alt="" class="" />
										<h3 class="text-5xl md:text-6xl font-semibold font-head m-0 text-gray-950">
											A web developer since 2022
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="xl:space-y-6">
						<div
						class="  mx-auto w-full mb-[3rem] xl:mb-0 rounded-2xl overflow-hidden md:max-w-2xl xl:max-w-xl duration-300 about-items relative transition-none bg-white md:shadow-2xl dark:bg-gray-900"
						style="opacity: 0; transform: translateY(150px)"
					>
						<div class="w-full h-full relative">
							<div class=" grid items-end p-8">
								<div>
									<h3 class="text-3xl md:text-5xl font-semibold font-head m-0">
										I love building stuff on the web.
									</h3>
									<p class="mt-4 text-lg opacity-85 md:text-xl">
										I am a self taught, frontend web developer based in Cameroon. I am a curious
										programmer, who sometimes goes rogue with designs and comes up with unique
										stuff. I am an adept learner, an average teacher and an introvert.
									</p>
									<h3 class="mt-6 text-2xl font-semibold font-head m-0">Open Source.</h3>
									<p class="mt-4 text-lg opacity-85 md:text-xl">
										Over the years I have contributed to open source, including <Link
											target="_blank"
											href="https://github.com/biomejs/biome/pull/2230"
											>the documenntation of Biome</Link
										>, a fast javascript linter and formatter, and <Link
											target="_blank"
											href="https://github.com/michaelnji/test-stepci-and-circleci-integration"
											>coding and testing</Link
										> the integration of StepCI with CircleCI, and then <Link
											target="_blank"
											href="https://github.com/stepci/stepci/pull/231">providing documentation</Link
										> on how it is done.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="   mx-auto w-full mb-[6rem] xl:mb-0 rounded-2xl overflow-hidden md:max-w-2xl xl:max-w-xl duration-300 about-items relative transition-none bg-white md:shadow-2xl dark:bg-gray-900"
						style="opacity: 0; transform: translateY(150px)"
					>
						<div class="p-6">
							<h3 class="text-2xl font-semibold font-head m-0">My Skills.</h3>
							<div class="mt-6 flex flex-wrap gap-3">
								{#each skills as skill}
									{#if skill.name === 'github'}
										<span
											class=" font-head text-xl font-medium md:font-semibold capitalize px-3 py-1.5 border-2 rounded-xl text-black dark:text-gray-50 dark:border-gray-50 border-black"
											>{skill.name}</span
										>
									{:else}
										<span
											class=" font-head text-xl font-medium md:font-semibold capitalize px-3 py-1.5 border-2 rounded-xl"
											style={`color: ${skill.text}; border-color: ${skill.text}; `}
											>{skill.name}</span
										>
									{/if}
								{/each}
							</div>
						</div>
					</div>
					</div>
				</div>
			</IntersectionObserver>
		</div>
	</div>
</div>
