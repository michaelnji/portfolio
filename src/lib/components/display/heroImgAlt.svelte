<script lang="ts">
	import { IconSolid } from 'svelte-heros-v2';
		export let name: string;
</script>

<div class="   overflow-hidden mb-6">
	<IconSolid name={`${name}-solid`} class="w-full h-full max-w-[10rem]" />
</div>
