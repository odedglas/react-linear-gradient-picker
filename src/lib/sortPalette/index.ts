import { ColorStop } from '../types';

const sortByOffset = (a: ColorStop, b: ColorStop): number => Number(a.offset) - Number(b.offset);

/**
 * Sorts a given palette by its stops offset.
 * @param palette - The color stops palette to sort
 * @returns The sorted palette
 */
const sortPalette = (palette: ColorStop[]): ColorStop[] => {
  return [...palette].sort(sortByOffset);
};

export default sortPalette;
