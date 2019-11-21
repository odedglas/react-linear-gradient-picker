const compare = ({ offset: offset1 }, { offset: offset2 }) => offset1 - offset2;

const sortPalette = (palette) => {
	return palette.sort(compare);
};

export default sortPalette;