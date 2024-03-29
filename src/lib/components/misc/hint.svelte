<script lang="ts">
	import Star from 'svelte-heros-v2/Star.svelte';
</script>




<div class=" border-l-8 border-spacing-9  border-dashed border-green-600 font-medium relative  bg-gray-500 dark:bg-gray-600 !bg-opacity-10 p-8  text-green-600 dark:text-green-300 text-pretty">
	<div class=" border-8  border-gray-50 dark:border-gray-950  rounded-full absolute p-3 bg-green-600 -top-4 -left-9">
			<Star width="24" height="24" class='text-green-100'/>
	</div>
	<slot/>
</div>