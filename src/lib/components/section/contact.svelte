<script>
	import { animate } from 'popmotion';
	import Discord from 'svelte-simples/Discord.svelte';
	import Github from 'svelte-simples/Github.svelte';
	import Gmail from 'svelte-simples/Gmail.svelte';
	import Twitter from 'svelte-simples/Twitter.svelte';

	animate({
		from: 0,
		to: 100
	});
	let socials = [
		{
			name: 'discord',
			link: 'https://discordapp.com/users/1086901938127388702',
			text: '#748ffc',
			color: '#bac8ff'
		},
		{
			name: 'twitter',
			link: 'https://twitter.com/heisgtr',
			text: '#339af0',
			color: '#a5d8ff'
		},
		{
			name: 'gmail',
			link: 'mailto:email@michaelnji.dev',
			text: '#ff6b6b',
			color: '#ffc9c9'
		},
		{
			name: 'github',
			link: 'https://github.com/michaelnji',
			text: 'white',
			color: 'black'
		}
	];
</script>

<div
	class="p-6 md:p-12  transform rotate-6 bg-purple-50 max-w-lg mx-auto w-full card-wrapper transition duration-300 border-4 border-black rounded-2xl"
>
	<h1 class="text-2xl mx-auto md:text-4xl font-extrabold font-head text-center text-gray-950">I'm active @</h1>

	<div class="flex justify-center flex-wrap w-full gap-3 mt-8">
		{#each socials as social}
			<a href={social.link}>
				<div
					class={` p-3 flex items-center flex-col gap-3 m   skill rounded-xl !bg-opacity-10`}
					style={`color: #fff !important; border:2px solid ${social.text}; background-color:${social.color}; `}
				>
					{#if social.name === 'github' }
					<Github color={`${social.text}`} height="32" width="32" />
					{:else if social.name === 'discord' }
					<Discord color={`${social.text}`} height="32" width="32" />
						
					{:else if social.name === 'gmail' }
					<Gmail color={`${social.text}`} height="32" width="32" />
						
					{:else if social.name === 'twitter' }
					<Twitter color={`${social.text}`} height="32" width="32" />
						
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
