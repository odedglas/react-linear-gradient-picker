/**
 * Clamps an angle into given boundaries
 * @param angle - The angle to clamp
 * @param min - The minimum angle (default: 0)
 * @param max - The maximum angle (default: 360)
 * @returns The clamped angle
 */
const clampAngle = (angle: number, min: number = 0, max: number = 360): number => {
  if (angle < min) {
    return 360 + angle;
  }

  if (angle > max) {
    return angle - 360;
  }

  return angle;
};

export default clampAngle;
