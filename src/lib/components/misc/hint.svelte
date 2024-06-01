<script lang="ts">
	import InformationCircle from 'svelte-heros-v2/InformationCircle.svelte';
</script>




<div class="px-3">
	<div class=" border-l-8 border-spacing-9  border-dashed border-green-600 font-medium relative  bg-gray-300 dark:bg-gray-600 !bg-opacity-10 p-8   dark:text-green-300 text-pretty">
	<div class=" border-8  border-gray-50 dark:border-gray-950  rounded-full absolute p-1 bg-green-600 -top-4 -left-9">
			<InformationCircle size="38" class='text-green-100'/>
	</div>
	<slot/>
</div>
</div>