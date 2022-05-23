import {
    CIRCLE_DEGREES,
    START_POINT_RATIO,
    END_POINT_RATIO,
    EPSILON
} from './constants';

/**
 * Formats a cord point, ensure it's value
 * @param {Number} value
 * @returns {Number}
 */
const formatPoint = (value) => (value <= 0 || (Math.abs(value) <= EPSILON)) ? 0 : value;

/**
 * Calculates a angle point by sin / cos
 * @param {Number} angle
 * @returns {{x: Number, y: Number}}
 */
const anglePoint = (angle) => ({
    x: formatPoint(Math.cos(angle)),
    y: formatPoint(Math.sin(angle))
});

/**
 * Turns a given degree into radians
 * @param {Number} degrees
 * @returns {Number}
 */
const degreesToRadians = (degrees) => ((degrees * Math.PI) / 180);

/**
 * Returns a start / end coordinates of a given angle
 * @param {Number} angle
 * @returns {{startPoint: {x: Number, y: Number}, endPoint: {x: Number, y: Number}}}
 */
const getAngleCords = (angle = 0) => {
    const adjustedAngle = ((CIRCLE_DEGREES - angle) % CIRCLE_DEGREES);

    const startPoint = anglePoint(degreesToRadians(START_POINT_RATIO - adjustedAngle));
    const endPoint = anglePoint(degreesToRadians(END_POINT_RATIO - adjustedAngle));

    return { startPoint, endPoint };
};

export default getAngleCords;
