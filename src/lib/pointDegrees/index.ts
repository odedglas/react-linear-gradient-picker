import { Point } from '../../types';

/**
 * Returns a given point's matched angle in degrees from the center
 * @param pointX - The point X
 * @param pointY - The point Y
 * @param center - Represents the center to calculate the point's angle from
 * @returns The angle in degrees
 */
const pointDegrees = (pointX: number, pointY: number, center: Point): number => {
  const y = pointY - center.y;
  const x = pointX - center.x;

  const radians = Math.atan2(y, x);
  return Math.round(radians * (180 / Math.PI)) + 90;
};

export default pointDegrees;
