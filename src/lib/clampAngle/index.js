/**
 * Bounds an angle into circle degrees
 * @param {Number} angle
 * @returns {Number}
 */
const clampAngle = (angle) => {
	if (angle < 0) {
		return 360 + angle;
	}

	if (angle > 360) {
		return angle - 360;
	}

	return angle;
};

export default clampAngle;