import React from 'react';
import { sortPalette, getGradientPreview } from '../../lib';
import { PALETTE_PROP_TYPES } from '../propTypes';

const Palette = ({ palette, width, height, angle = 90 }) => {
	const preview = getGradientPreview(sortPalette(palette), angle);

	return (
		<div
			className="palette"
			style={{ width, height, background: preview.background }}
		/>
	);
};

Palette.propTypes = PALETTE_PROP_TYPES;

export default Palette;
