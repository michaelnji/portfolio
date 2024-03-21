<script lang="ts">
	import Exclamation from 'svelte-heros-v2/ExclamationTriangle.svelte';
</script>

<div
	class="p-3  border-2 border-orange-400 border-opacity-20 !bg-orange-600 !bg-opacity-10 relative"
>
	<div class="  absolute p-3 bg-orange-500 text-white -top-3 left-6">
		<Exclamation width="26" height="26" />
	</div>
	<div class="  !font-normal transform scale-90 text-orange-800 dark:text-orange-100 pt-10 p-3">
		<slot />
	</div>
</div>
