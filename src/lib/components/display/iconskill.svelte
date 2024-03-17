<script lang="ts">
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { Icon } from 'svelte-simples';
	export let name: string;
	export let color: string;
	export let icon: string | undefined;
	export let delay: number;
	let skill: any;
</script>

<IntersectionObserver
	element={skill}
	on:intersect={() => {
		anime({
			targets: '.skills .skill',
			scale: 1,
			duration: 600,
			delay: 10 * delay
		});
	}}
>
	<div
		bind:this={skill}
		class={` p-3 flex items-center flex-col gap-3   skill rounded-xl`}
		style={`color: ${color} !important; transform: scale(0)`}
	>
		<Icon name={icon ? icon : name} {color} height="50" width="50" class="hidden md:block" />
		<Icon name={icon ? icon : name} {color} height="30" width="30" class="block md:hidden" />
		<p class="text-base md:text-2xl font-medium capitalize">{name}</p>
	</div>
</IntersectionObserver>
