import angleToGradientCords from '../angleToGradientCords';
import getStopColor from '../getStopColor';
import getStopOffset from '../getStopOffset';
import { ColorStop, GradientCoordinates } from '../types';

type GradientType = 'linear' | 'radial';

interface GradientConfig {
  angle: number;
  stops: Array<{
    color: string;
    offset: number;
  }>;
  type: GradientType;
}

interface GradientPreview {
  background: string;
  angle: number;
  gradient: GradientCoordinates;
}

/**
 * Formats into linear gradient background property
 * @param config - The gradient configuration
 * @returns The formatted gradient string
 */
const asBackground = ({ angle, stops, type }: GradientConfig): string => {
  const anglePrefix = type === 'linear' ? `${angle}deg, ` : '';

  return stops.length === 1 ? stops[0].color : `${type}-gradient(${anglePrefix}${stops.map(stop => `${stop.color} ${stop.offset}%`).join(', ')})`;
};

/**
 * Returns a given gradient palette and angle a background preview
 * @param palette - The color stops palette
 * @param angle - The gradient angle in degrees
 * @param gradientType - The type of gradient (linear or radial)
 * @returns The formatted gradient string
 */
const getGradientPreview = (palette: ColorStop[], angle = 90, gradientType: GradientType = 'linear'): GradientPreview => {
  const gradient = angleToGradientCords(angle);

  const stops = palette.map(({ offset, color, opacity }) => ({
    offset: getStopOffset(offset),
    color: getStopColor(color, opacity),
  }));

  const background = asBackground({ angle, stops, type: gradientType });

  return { background, gradient, angle };
};

export default getGradientPreview;
