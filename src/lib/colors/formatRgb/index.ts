import { Color } from '../../../types';

/**
 * Formats an rgba into a css rgb/a property
 * @param color - The color object to format
 * @returns Formatted RGB/RGBA string
 */
const formatRgb = ({ r, g, b, a = 1 }: Color): string => (a !== 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`);

export default formatRgb;
