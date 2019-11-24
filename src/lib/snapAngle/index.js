/**
 * Snaps an angle if needed
 * @param {Number} angle - The angle to snap
 * @param {Number} snap - The snapping to use
 * @returns {Number}
 */
const snapAngle = (angle, snap = 0) => {
	const module = angle % snap;

	if (module === 0) { return angle; }

	const snappingAddition = module > snap / 2 ? snap - module : (-1 * module);
	return angle + snappingAddition;
};

export default snapAngle;