export const hexRegExp = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
export const sortHexRegExp = new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);

const formatHexNumber = (item) => parseInt(
    item.repeat(3 - item.length),
    16
);

/**
 * Converts a hex color string into rgb
 * @param {String} hex - Hex color string
 * @param {Number} opacity - The opacity to use
 * @returns {Object}
 */
const hexToRgb = (hex, opacity = 1) => {
    const result = hexRegExp.exec(hex) || sortHexRegExp.exec(hex);

    return result ? {
        r: formatHexNumber(result[1]),
        g: formatHexNumber(result[2]),
        b: formatHexNumber(result[3]),
        a: opacity
    } : undefined;
};

export default hexToRgb;
