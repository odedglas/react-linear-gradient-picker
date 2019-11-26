/**
 * Returns a DOM element center offset
 * @param {HTMLElement} el
 * @returns {{ x: Number, y: Number }}
 */
const centerOffset = (el) => {
	if (!el) return { y: 0, x: 0 };

	const { top, left, height, width } = el.getBoundingClientRect();

	return {
		y: top + height / 2,
		x: left + width / 2
	};
};

export default centerOffset;