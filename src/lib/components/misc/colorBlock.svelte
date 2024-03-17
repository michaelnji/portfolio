<script lang="ts">
	export let portableText: any;
	$: ({ plainTextContent } = portableText);
</script>

<span class="mx-2 inline-flex gap-x-2 items-baseline">
	<div class="h-4 w-4 rounded" style={`background-color: ${plainTextContent}`} />
	<slot />
</span>
