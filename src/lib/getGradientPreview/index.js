import angleToGradientCords from '../angleToGradientCords';
import getStopColor from '../getStopColor';
import getStopOffset from '../getStopOffset';

/**
 * Formats into linear gradient background property
 * @param {Number} angle - The linear gradient degree
 * @param {Stop[]} stops - The linear gradient stops
 * @param {GradientType} type - The gradient type
 * @returns {String}
 */
const asBackground = ({ angle, stops, type }) => {
  const anglePrefix = type === 'linear' ? `${angle}deg, ` : '';

  return stops.length === 1 ? stops[0].color : `${type}-gradient(${anglePrefix}${stops.map(stop => `${stop.color} ${stop.offset}%`).join(', ')})`;
};

/**
 * Returns a given gradient palette and angle a background preview
 * @param {PaletteColor[]} palette
 * @param {Number} angle
 * @param {GradientType} gradientType
 */
const getGradientPreview = (palette, angle = 90, gradientType = 'linear') => {
  const gradient = angleToGradientCords(angle);

  const stops = palette.map(({ offset, color, opacity }) => ({
    offset: getStopOffset(offset),
    color: getStopColor(color, opacity),
  }));

  const background = asBackground({
    angle,
    stops,
    type: gradientType,
  });

  return { gradient, background, angle };
};

export default getGradientPreview;
