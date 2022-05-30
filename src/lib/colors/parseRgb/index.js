export const rgbRegExp = new RegExp(/\d+/g);

const formatNumber = (num) => Number(num);

const isValidRgb = (r, g, b, a) => {
  return [r, g ,b].every((i) => i >= 0 && i <= 255) && (!a || (a >= 0 && a <= 1));
};

/**
 * Parses a rba / rgba string, ensure it's validness
 * @param {String} rgbString
 * @returns {Object}
 */
const parseRgb = (rgbString) => {
    const [r, g, b, ...a] = rgbString.match(rgbRegExp);
    const opacity = a.join('.') || 1;

    return isValidRgb(r, g, b, opacity) ? {
        r: formatNumber(r),
        g: formatNumber(g),
        b: formatNumber(b),
        a: formatNumber(opacity)
    } : undefined;
};

export default parseRgb;
