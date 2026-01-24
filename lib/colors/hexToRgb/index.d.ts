import { Color } from '../../../types';
export declare const hexRegExp: RegExp;
export declare const sortHexRegExp: RegExp;
/**
 * Converts a hex color string into rgb
 * @param hex - Hex color string
 * @param opacity - The opacity to use
 * @returns RGB color object or undefined if invalid hex
 */
declare const hexToRgb: (hex: string, opacity?: number) => Color | undefined;
export default hexToRgb;
