import parser from 'linear-gradient-parser';

/**
 * @typedef {Object} PaletteColor
 * @param {String} color - The stop color
 * @param {Number} opacity - The stop color opacity
 * @param {Number} offset - The stop offset
 */

/**
 * Returns a given gradient palette and angle a background preview
 * @param {PaletteColor[]} palette
 * @param {Number} angle
 */
const getGradientPreview = (palette, angle = 90) => {
	const gradient = parser.getGradientCords(angle);

	const { background } = parser.getBackground({
		...gradient,
		stops: palette
	});

	return { gradient, background, angle};
};

export default getGradientPreview;