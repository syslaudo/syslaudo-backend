import { parse, isDate } from 'date-fns';

export default function parseDateString(
  value: any,
  originalValue: any,
): Promise<void> {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date());

  return parsedDate;
}
