export function resolveLanguage(lang: string) {
	const definition = require(`svelte-highlight/languages/${lang}`);
	return definition;
}
