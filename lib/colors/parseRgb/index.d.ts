import { Color } from '../../../types';
export declare const rgbRegExp: RegExp;
/**
 * Parses a rgb / rgba string, ensure it's validness
 * @param rgbString - The RGB/RGBA string to parse
 * @returns RGB color object or undefined if invalid
 */
declare const parseRgb: (rgbString: string) => Color | undefined;
export default parseRgb;
