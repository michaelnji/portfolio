// @ts-ignore
import { round } from 'mathjs';
/**
 * @description Formats a number to a more human friendly format
 * @example const formattedNumber = formatNum(100990) // 100,990
 * @param {number} num
 * @return {*} {string | number}
 */
export function formatNum(num: number): string | number {
	if (num < 1000 || !num) {
		return num;
	}
	const [integer, decimal = '00']: string[] = num.toString().split('.');
	const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return `${formattedInteger}.${decimal}`;
}
/**
 * @description Adds a currency symbol to a number
 * @example const formattedNumber = formatNumCurrency(23500,'XAF') // XAF 23500
 * @example const formattedNumber = formatNumCurrency(23500,'USD') // USD 23500
 * @param {number} num
 * @param {string} [currency='XAF']
 * @return {*}  {string}
 */
export function formatNumCurrency(num: number, currency: string = 'XAF'): string {
	const temp = round(num, 2);
	const [integer, decimal = '00'] = temp.toString().split('.');
	const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return `${currency.toUpperCase()} ${formattedInteger}.${decimal}`;
}
/**
 * @description summarizes numbers by replacing significant figures with letters representing their magnitude
 * @example const formattedNumber = numToSummary(10250000) // 10.2M
 * @example const formattedNumber = numToSummary(23500) // 23.5K
 * @export
 * @param {number} num
 * @return {*}  {(string | number)}
 */
export function numToSummary(num: number): string | number {
	if (num < 1000 || !num) return num;
	const units = ['K', 'M', 'B', 'T'];
	const unit = Math.floor((num.toString().split('.')[0].length - 1) / 3);
	const value = (num / Math.pow(1000, unit)).toFixed(2);
	return `${value}${units[unit - 1]}`;
}
