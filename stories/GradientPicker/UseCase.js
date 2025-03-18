import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getGradientPreview } from '../../src/lib';
import { GradientPicker } from '../../src';

const UseCase = ({ palette, ColorPicker, link, title, popoverColorPicker, direction }) => {
	const [localPalette, setLocalPalette] = useState(palette);

	const { background, angle } = getGradientPreview(localPalette);

	const info = JSON.stringify(localPalette);

	return (
		<div className="use-case-content">
			<div className="inner">
				<div className="title">
					With&nbsp;
					<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
				</div>
				<div className="result">{ info } </div>
				<GradientPicker {...{
					width: 320,
					paletteHeight: 32,
					palette: localPalette,
					onPaletteChange: setLocalPalette,
					direction,
					popoverColorPicker
				}}>
					{ ColorPicker ? <ColorPicker/> : null }
				</GradientPicker>
				<hr/>
				<h4>Background preview for {angle} Angle</h4>
				<div className="preview" style={{ background }}/>
			</div>
		</div>
	);
};

UseCase.propTypes = {
	palette: PropTypes.array,
	ColorPicker: PropTypes.any,
	link: PropTypes.string,
	title: PropTypes.string,
	direction: PropTypes.oneOf(['horizontal', 'vertical']),
	popoverColorPicker: PropTypes.bool,
};

export default UseCase;
