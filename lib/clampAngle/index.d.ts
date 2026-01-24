/**
 * Clamps an angle into given boundaries
 * @param angle - The angle to clamp
 * @param min - The minimum angle (default: 0)
 * @param max - The maximum angle (default: 360)
 * @returns The clamped angle
 */
declare const clampAngle: (angle: number, min?: number, max?: number) => number;
export default clampAngle;
