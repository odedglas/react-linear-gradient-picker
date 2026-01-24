import { GradientCoordinates } from '../../types';
/**
 * Returns a start / end coordinates of a given angle
 * @param angle - The angle in degrees
 * @returns The gradient coordinates
 */
declare const angleToGradientCords: (angle?: number) => GradientCoordinates;
export default angleToGradientCords;
