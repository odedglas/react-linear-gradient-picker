import { Point } from '../../types';
/**
 * Returns a given point's matched angle in degrees from the center
 * @param pointX - The point X
 * @param pointY - The point Y
 * @param center - Represents the center to calculate the point's angle from
 * @returns The angle in degrees
 */
declare const pointDegrees: (pointX: number, pointY: number, center: Point) => number;
export default pointDegrees;
