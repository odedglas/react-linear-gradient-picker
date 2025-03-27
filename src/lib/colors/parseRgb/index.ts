import { Color } from '../../types';

export const rgbRegExp = new RegExp(/\d+/g);

const formatNumber = (num: string): number => Number(num);

const isValidRgb = (r: number, g: number, b: number, a?: number): boolean => {
  return [r, g, b].every(i => i >= 0 && i <= 255) && (!a || (a >= 0 && a <= 1));
};

/**
 * Parses a rgb / rgba string, ensure it's validness
 * @param rgbString - The RGB/RGBA string to parse
 * @returns RGB color object or undefined if invalid
 */
const parseRgb = (rgbString: string): Color | undefined => {
  const match = rgbString.match(rgbRegExp);
  if (!match) return undefined;

  const [r, g, b, ...a] = match;
  const opacity = a.join('.') || '1';

  return isValidRgb(Number(r), Number(g), Number(b), Number(opacity))
    ? {
        r: formatNumber(r),
        g: formatNumber(g),
        b: formatNumber(b),
        a: formatNumber(opacity),
      }
    : undefined;
};

export default parseRgb; 