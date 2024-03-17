<div
	class="w-full h-screen fixed z-50 bg-gray-500 dark:!bg-gray-950 grid place-items-center overflow-hidden"
	style="z-index: 1000;"
>
	<div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl">
		<div class="loader" />
	</div>
</div>

<style>
	/* HTML: <div class="loader"></div> */
	.loader {
		width: 45px;
		aspect-ratio: 1;
		--c: no-repeat linear-gradient(#715df2 0 0);
		background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 50%, var(--c) 100% 0, var(--c) 100% 100%;
		animation: l13 1s infinite alternate;
	}

	@keyframes l13 {
		0%,
		10% {
			background-size: 20% 100%;
		}
		50% {
			background-size: 20% 20%;
		}
		90%,
		100% {
			background-size: 100% 20%;
		}
	}
</style>
