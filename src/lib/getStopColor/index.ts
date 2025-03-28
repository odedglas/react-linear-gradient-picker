import formatRgb from '../colors/formatRgb';
import hexToRgb, { hexRegExp, sortHexRegExp } from '../colors/hexToRgb';
import parseRgb, { rgbRegExp } from '../colors/parseRgb';
import { Color } from '../types';

interface ColorClassifier {
  regexps: RegExp[];
  handler: (color: string, opacity?: number) => Color | undefined;
}

const colorClassifiers: ColorClassifier[] = [
  { regexps: [hexRegExp, sortHexRegExp], handler: hexToRgb },
  { regexps: [rgbRegExp], handler: parseRgb },
];

/**
 * Gets the stop color in RGB format
 * @param color - The color string in hex or RGB format
 * @param opacity - The opacity value (0-1)
 * @returns The formatted RGB color string
 * @throws Error if the color format is not supported
 */
const getStopColor = (color: string, opacity?: number): string => {
  const classifier = colorClassifiers.find(({ regexps }) => regexps.some(regexp => regexp.test(color)));

  if (!classifier) {
    throw new Error(`Stop color - ${color} does not follow one of the accepted formats Hex / Rgb / Rgba `);
  }

  const parsedColor = classifier.handler(color, opacity);

  if (!parsedColor) {
    throw new Error(`Stop color - ${color} is not a valid color`);
  }

  return formatRgb(parsedColor);
};

export default getStopColor;
