const sortByOffset = ({ offset: offset1 }, { offset: offset2 }) => offset1 - offset2;

/**
 * Sorts a given pallet by it's stops offset.
 * @param palette
 * @returns {PaletteColor[]}
 */
const sortPalette = palette => {
  return palette.sort(sortByOffset);
};

export default sortPalette;
