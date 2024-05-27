<script lang="ts">
	import { skills } from '$lib/utils/skills';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	let element: HTMLElement;
	let play = false;
	function animateEntry() {
		const items = document.querySelectorAll('.about-items');
		anime({
			targets: items,
			translateY: 0,
			opacity: 1,
			duration: 1200,
			delay: anime.stagger(300, { start: 600, easing: 'linear' })
		});
	}
	onMount(() => {
		if (window) {
			window.onscroll = () => {
				play = true;
			};
			window.onscrollend = () => {
				play = false;
			};
		}
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={element} class="  w-screen flex items-start justify-center" id="about">
	<div class="w-full">
		<div class="px-3 md:px-6">
			<IntersectionObserver
				{element}
				on:intersect={() => {
					animateEntry();
				}}
			>
				<div bind:this={element} />
				<div class="flex flex-col-reverse xl:flex-row items-center justify-center xl:items-start gap-2 max-w-7xl mx-auto">
					<div
						class="  mx-auto w-full mb-[6rem] lg:mb-[9rem] border-4 border-black card-wrapper max-h-[60rem] overflow-hidden md:max-w-2xl xl:max-w-lg duration-300 about-items relative"
						style="opacity: 0; transform: translateY(150px)"
					>
						<div class="w-full h-full relative">
							<div class=" grid items-end bg-secondary p-6">
								<div>
									<img src="/dev.svg" alt="" class="" />
									<h3 class="text-5xl md:text-7xl font-semibold font-head m-0 text-gray-950">
										A junior web developer since 2022
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div
						class="  mx-auto w-full mb-[6rem] lg:mb-[9rem] border-4 border-black border-dashed  overflow-hidden md:max-w-2xl xl:max-w-lg duration-300 about-items relative transition-none"
						style="opacity: 0; transform: translateY(150px)"
					>
						<div class="w-full h-full relative">
							<div class=" grid items-end bg-white p-6">
								<div>
									<h3 class="text-3xl md:text-5xl font-semibold font-head m-0 text-gray-950">
										I am a student in the University of Buea.
									</h3>
									<p class="mt-4 text-lg md:text-2xl">
										I am a self taught, frontend web developer based in Cameroon. I am a rebellious
										programmer, who most times goes rogue with designs and comes up with unique
										stuff. I am an adept learner, an average teacher and a big introvert.
									</p>
									<h3 class="text-2xl font-semibold font-head m-0 text-gray-950 mt-8">
										My Skills.
									</h3>
									<div class="mt-6 flex flex-wrap gap-3">
										{#each skills as skill}
										{#if skill.name === 'github'}
										<span
												class=" font-head text-xl font-medium md:font-semibold capitalize px-3 py-1.5 border-2 rounded-xl text-black border-black"
												>{skill.name}</span
											>
											{:else}
											<span
												class=" font-head text-xl font-medium md:font-semibold capitalize px-3 py-1.5 border-2 rounded-xl"
												style={`color: ${skill.text}; border-color: ${skill.text}; `}>{skill.name}</span
											>
										{/if}
											
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</IntersectionObserver>
		</div>

		
	</div>
</div>
