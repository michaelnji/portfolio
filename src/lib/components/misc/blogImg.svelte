<script>
	// @ts-nocheck
	export let portableText;
	$: ({ value } = portableText);
	$: ({ asset } = value);
	$: ({ _ref } = asset);
</script>

<img
	class=" rounded-3xl border-2 border-gray-900 custom-img dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-png')[0]
	}.png`}
	alt=""
/>

<style>
	.custom-img {
		box-shadow: 4px 4px black;
	}
	.custom-img:hover {
		box-shadow: -4px -4px black;
	}
</style>
