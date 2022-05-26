import getStopColor from '../getStopColor';
import getStopOffset from '../getStopOffset';
import angleToGradientCords from '../angleToGradientCords';

/**
 * @typedef {Object} PaletteColor
 * @param {String} color - The stop color
 * @param {Number} opacity - The stop color opacity
 * @param {Number} offset - The stop offset
 */

/**
 * Formats into linear gradient background property
 * @param {Number} angle - The linear gradient degree
 * @param {Stop[]} stops - The linear gradient stops
 * @returns {String}
 */
const asBackground = ({ angle, stops }) => stops.length === 1 ? stops[0].color : `linear-gradient(${angle}deg, ${
	stops
		.map(stop => `${stop.color} ${stop.offset}%`)
		.join(', ')
})`;

/**
 * Returns a given gradient palette and angle a background preview
 * @param {PaletteColor[]} palette
 * @param {Number} angle
 */
const getGradientPreview = (palette, angle = 90) => {
	const gradient = angleToGradientCords(angle);

	const stops = palette.map(({ offset, color, opacity }) => ({
		offset: getStopOffset(offset),
		color: getStopColor(color, opacity)
	}));

	const background = asBackground({
		angle,
		stops
	});

	return { gradient, background, angle };
};

export default getGradientPreview;