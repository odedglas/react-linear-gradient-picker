/**
 * Clamps an angle into given boundaries
 * @param {Number} angle
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const clampAngle = (angle, min = 0, max = 360) => {
  if (angle < min) {
    return 360 + angle;
  }

  if (angle > max) {
    return angle - 360;
  }

  return angle;
};

export default clampAngle;
