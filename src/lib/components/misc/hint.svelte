<script lang="ts">
	import Star from 'svelte-heros-v2/Star.svelte';
</script>

<div
	class="p-3  border-2 border-opacity-20 border-green-500 bg-green-400 dark:bg-green-200 !bg-opacity-10 relative"
>
	<div class=" absolute  p-3 bg-green-400 text-white -top-3 left-6">
		<Star width="24" height="24" />
	</div>
	<div class=" tracking-tight leading-normal !font-normal pt-10 p-3  transform scale-95  text-green-800 dark:text-green-100">
		<slot />
	</div>
</div>
