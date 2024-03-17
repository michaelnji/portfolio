import { writable } from 'svelte/store';
// theme store for dark mode
const theme: any = writable('light');
export default theme;
