<script lang="ts">
	import { skills } from '$lib/utils/skills';
		
</script>


				
					{#each skills as skill}
						<span class="m-4 font-retro text-5xl font-medium md:font-semibold capitalize" style={`color: ${skill.text};`}>{skill.name}</span>
					{/each}
				
			