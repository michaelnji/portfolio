<script>
	// @ts-nocheck
	export let portableText;
	$: ({ value } = portableText);
	$: ({ asset } = value);
	$: ({ _ref } = asset);
</script>

<img
	class="  border-2 border-gray-900 card-wrapper dark:custom-img-dark w-full transition duration-300 ease-in-out"
	src={`https://cdn.sanity.io/images/5xp71fus/production/${
		_ref.split('image-')[1].split('-png')[0]
	}.png`}
	alt=""
/>


