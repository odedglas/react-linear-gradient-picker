/**
 * Formats an rgba into a css rgb/a property
 * @returns {String}
 */
const formatRgb = ({ r, g, b, a = 1}) => a !== 1 ? `rgba(${r}, ${g}, ${b}, ${a})`
    : `rgb(${r}, ${g}, ${b})`;

export default formatRgb;
