<script lang=ts>
	import { page } from "$app/stores";

     $: currentSection = $page.url.pathname;
</script>
{#key currentSection}
<slot/>
{/key}