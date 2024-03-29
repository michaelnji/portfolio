<script lang="ts">
	import Exclamation from 'svelte-heros-v2/ExclamationTriangle.svelte';
</script>


<div class=" border-l-8 border-spacing-9  border-dashed border-orange-600 font-medium relative  bg-gray-500 dark:bg-gray-600 !bg-opacity-10 p-8  text-orange-600 dark:text-orange-300 text-pretty">
	<div class=" border-8  border-gray-50 dark:border-gray-950  rounded-full absolute p-3 bg-orange-600 -top-4 -left-9">
		<Exclamation width="26" height="26" class='text-orange-100'/>
			
	</div>
	<slot/>
</div>