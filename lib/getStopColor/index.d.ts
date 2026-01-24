/**
 * Gets the stop color in RGB format
 * @param color - The color string in hex or RGB format
 * @param opacity - The opacity value (0-1)
 * @returns The formatted RGB color string
 * @throws Error if the color format is not supported
 */
declare const getStopColor: (color: string, opacity?: number) => string;
export default getStopColor;
