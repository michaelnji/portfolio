<script>
	import { animate } from 'popmotion';
	import  Discord  from 'svelte-simples/Discord.svelte';
	import  Twitter  from 'svelte-simples/Twitter.svelte';
	import  Gmail  from 'svelte-simples/Gmail.svelte';
	import  Github  from 'svelte-simples/Github.svelte';

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
			link: 'https://twitter.com/CodeD3vil',
			text: '#339af0',
			color: '#a5d8ff'
		},
		{
			name: 'gmail',
			link: 'mailto:michaelnji34@gmail.com',
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
	class="p-6 md:p-12 rounded-2xl transform rotate-6 bg-purple-50 dark:bg-gray-900 shadow-2xl max-w-lg mx-auto w-full"
>
	<h1 class="text-2xl mx-auto md:text-4xl font-extrabold font-head text-center">I'm active @</h1>

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
