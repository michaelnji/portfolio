import { derived } from 'svelte/store';
import { navigating } from '$app/stores';

let timer: any = null;
export const navigationIsDelayed = derived(navigating, (newValue, set) => {
	if (timer) {
		clearTimeout(timer);
	}
	if (newValue) {
		timer = setTimeout(() => set(true), 500);
	}
	set(false);
});
