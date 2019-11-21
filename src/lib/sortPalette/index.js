const compare = ({ pos: pos1 }, { pos: pos2 }) => pos1 - pos2;

const sortPalette = (palette) => {
	return palette.sort(compare);
};

export default sortPalette;