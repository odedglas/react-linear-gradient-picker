/**
 * Returns an offset
 * @param offset - Stop offset, Can contain %
 * @returns The offset as a percentage (0-100)
 */
const getStopOffset = (offset: string | number): number => {
  const offsetStr = offset.toString().trim();

  if (offsetStr.endsWith('%')) {
    return Number(offsetStr.replace('%', ''));
  }

  // Assume 0-1 as percentage when offset has no %
  return Number(offsetStr) * 100;
};

export default getStopOffset;
