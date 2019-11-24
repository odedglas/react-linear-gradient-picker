/**
 * Returns a given point, It's matched angle in degrees from the center
 * @param {Number} pointX - The point X
 * @param {Number} pointY - The point Y
 * @param {Object} center - Represents the center to calculate the point's angle from.
 * @returns {Number}
 */
const pointDegrees = (pointX, pointY, center) => {
	const y = pointY - center.y;
	const x = pointX - center.x;

	const radians = Math.atan2(y, x);
	return Math.round(radians * (180/Math.PI)) + 90;
};


export default pointDegrees;