<script lang='ts'>
    import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
    import InformationCircle from 'svelte-heros-v2/InformationCircle.svelte'
    let el:HTMLElement
</script>
	<IntersectionObserver
					element={el}
					on:intersect={() => {
						
						anime({
							targets: `.banner`,
							opacity: 1,
							translateX: 0,
							duration: 1600,
                            delay: 200
						});
					}}
				>
<section bind:this={el} class="w-full px-6 banner" style="transform:translateX(-100px); opacity:0">
    <div class="max-w-max mx-auto p-6 border-4 border-black card-wrapper transition duration-300 flex flex-wrap items-center gap-3">
        <span>
            <InformationCircle size='50' />
        </span>
      <span class=" font-bold text-2xl" style="word-spacing: 0px;">
        Version 01 of this portfolio can be found <a class="underline text-primary" href="https://mykenji.vercel.app">here</a>
      </span>
    </div>
</section>
</IntersectionObserver>