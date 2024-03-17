import { format, parseISO } from 'date-fns';
import { isString } from 'mathjs';

export function getReadableDate(date: Date | string): string {
	const formatConfig = ' do MMM yyyy';
	return isString(date) ? format(parseISO(date), formatConfig) : format(date, formatConfig);
}
