<script lang="ts">
	export let href: string;
	export let classes: string = '';
	
	export let target: string = '';
</script>


	<a
		{href}
		class={`${classes} bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-500 dark:via-blue-500 dark:to-pink-500  inline-block text-transparent bg-clip-text font-semibold border-b-2 border-dotted border-primary  hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 hover:dark:from-pink-600 hover:dark:via-purple-600 hover:dark:to-blue-600  max-w-max hover:border-black dark:border-purple-500 group leading-tight !p-0`}
		{target}
	>
		<slot /> <small class="rotate-3"> » </small>
	</a>

