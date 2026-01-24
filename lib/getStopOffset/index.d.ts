/**
 * Returns an offset
 * @param offset - Stop offset, Can contain %
 * @returns The offset as a percentage (0-100)
 */
declare const getStopOffset: (offset: string | number) => number;
export default getStopOffset;
