// @ts-nocheck
export function animateCSS(element: string, animation: string, prefix = 'animate__') {
	return new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		const node: HTMLElement | null = document.querySelector(element);

		node.classList.add(`${prefix}animated`, animationName);

		function handleAnimationEnd(event: Event) {
			event.stopPropagation();

			node.classList.remove(`${prefix}animated`, animationName);
			resolve('Animation ended');
		}

		node.addEventListener('animationend', handleAnimationEnd, { once: true });
	});
}

export async function exitElement(
	el: string,
	el2: string,
	el3: string,
	outro: string,
	intro: string
) {
	let element = document.querySelector(el);
	let element2 = document.querySelector(el2);
	let element3 = document.querySelector(el3);

	await animateCSS(el, outro);
	element.classList.remove('z-50');
	element.classList.add('z-0');
	element2.classList.remove('z-10');
	element2.classList.add('z-50');
	element3.classList.add('z-0');
	element3.classList.add('z-10');
	await animateCSS(el, intro);
	await animateCSS(`${el2} .icon-a`, 'jello');
}

export function easeOutElastic(x: number): number {
	const c4 = (2 * Math.PI) / 3;

	return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

export function easeInOutBack(x: number): number {
const c1 = 1.70158;
const c2 = c1 * 1.525;

return x < 0.5
  ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
  : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}