<script>
	// @ts-nocheck
	import { urlFor } from '$lib/backend/sanity';
	export let portableText;
	$: ({ value } = portableText);
	$: ({ asset } = value);
	$: ({ _ref } = asset);
	console.log(portableText.value.asset._ref.split('image-')[1].endsWith('-jpg'));
</script>

{#if _ref.split('image-')[1].endsWith('-png') }
	<img
	class="  border-2 border-gray-900 card-wrapper dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={urlFor(`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-png')[0]
	}.png`).format('webp').url()}
	alt=""
/>
{:else if _ref.split('image-')[1].endsWith('-jpg')}
<img
	class="  border-2 border-gray-900 card-wrapper dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={urlFor(`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-jpg')[0]
	}.jpg`).format('webp').url()}
	alt=""
/>
{:else if _ref.split('image-')[1].endsWith('-jpeg')}
<img
	class="  border-2 border-gray-900 card-wrapper dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={ urlFor(`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-jpeg')[0]
	}.jpeg`).format('webp').url()}
	alt=""
/>
{:else if _ref.split('image-')[1].endsWith('-webp')}
<img
	class="  border-2 border-gray-900 card-wrapper dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={urlFor(`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-webp')[0]
	}.webp`).format('webp').url()}
	alt=""
/>
{/if}


