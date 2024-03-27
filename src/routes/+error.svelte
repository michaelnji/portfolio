<script lang=ts>
	import { easeInOutBack } from "$lib/utils/animations";
	import { fly } from "svelte/transition";


</script>
<div class="p-3 grid place-items-center w-full h-screen" in:fly={{y:100, easing: easeInOutBack}}>
    <div class="  w-full max-w-xl">
        <img src="/connectionlost.svg" alt="" class="w-full" >
    <div class="rounded-2xl p-6 bg-gray-100 dark:bg-base-100">
        <h2 class="font-head text-center  font-semibold text-3xl md:text-5xl ">An error occurred</h2>
        <p class="opacity-70 text-center md:text-xl md:mt-2">
            This could be related to your internet connection, please reload this page
        </p>
    </div>
</div>
</div>