<script lang="ts">
	import Exclamation from 'svelte-heros-v2/ExclamationTriangle.svelte';
</script>


<div class="px-3">
	<div class=" border-l-8 border-spacing-9  border-dashed border-orange-500 font-medium relative  bg-gray-300 dark:bg-gray-500 !bg-opacity-10 p-8   dark:text-orange-300 text-pretty">
	<div class=" border-8  border-gray-50 dark:border-gray-950  rounded-full absolute p-3 bg-orange-500 -top-4 -left-9">
		<Exclamation width="26" height="26" class='text-orange-50'/>
			
	</div>
	<slot/>
</div>
</div>