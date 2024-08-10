<script lang="ts">
	import  Typescript from "svelte-simples/Typescript.svelte";
	import  Svelte from "svelte-simples/Svelte.svelte";
	import  Supabase from "svelte-simples/Supabase.svelte";
	import  Python from "svelte-simples/Python.svelte";
	
	
</script>

<div class=" p-8 w-max  rounded-xl bg-secondary ">

	<div
		class="flex gap-x-3 transform"
		
	>
		<div class="flex flex-col justify-between gap-3  mb-3 container-a" >
			<span 
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Typescript width="40" height="40" color="#228be6" />
			</span>
			<span 
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Python width="40" height="40" color="#3498db" />
			</span>
		</div>
		<div class="flex flex-col justify-between gap-3 mb-3" >
			<span 
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Supabase width="40" height="40" color="#51cf66" /> supabase
			</span>
			<span 
				class="p-4 rounded-md shadow-lg font-bold font-mono text-3xl bg-white flex items-center gap-4 border border-gray-900 dark:border-gray-700 dark:bg-gray-800"
				><Svelte width="40" height="40" color="#ff922b" /> Svelte
			</span>
		</div>
	</div>
</div>
