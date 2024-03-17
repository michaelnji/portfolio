import { writable } from 'svelte/store';
const currentItem: any = writable('getting-started');
export default currentItem;
