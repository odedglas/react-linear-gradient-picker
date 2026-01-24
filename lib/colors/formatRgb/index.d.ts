import { Color } from '../../../types';
/**
 * Formats an rgba into a css rgb/a property
 * @param color - The color object to format
 * @returns Formatted RGB/RGBA string
 */
declare const formatRgb: ({ r, g, b, a }: Color) => string;
export default formatRgb;
