import { Point, GradientCoordinates } from '../types';

import { START_POINT_RATIO, END_POINT_RATIO, EPSILON } from './constants';

/**
 * Formats a cord point, ensure it's value
 * @param value - The value to format
 * @returns The formatted value
 */
const formatPoint = (value: number): number => (value <= 0 || Math.abs(value) <= EPSILON ? 0 : value);

/**
 * Calculates a angle point by sin / cos
 * @param angle - The angle in radians
 * @returns The calculated point
 */
const anglePoint = (angle: number): Point => ({
  x: formatPoint(Math.cos(angle)),
  y: formatPoint(Math.sin(angle)),
});

/**
 * Turns a given degree into radians
 * @param degrees - The angle in degrees
 * @returns The angle in radians
 */
const degreesToRadians = (degrees: number): number => (degrees * Math.PI) / 180;

/**
 * Returns a start / end coordinates of a given angle
 * @param angle - The angle in degrees
 * @returns The gradient coordinates
 */
const angleToGradientCords = (angle: number = 0): GradientCoordinates => {
  const radians = degreesToRadians(angle);
  const point = anglePoint(radians);

  return {
    x1: point.x * START_POINT_RATIO,
    y1: point.y * START_POINT_RATIO,
    x2: point.x * END_POINT_RATIO,
    y2: point.y * END_POINT_RATIO,
  };
};

export default angleToGradientCords;
