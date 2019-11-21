import React, { useState } from 'react';
import parser from 'linear-gradient-parser/src';
import PropTypes from 'prop-types';
import GradientPicker from '../src';

const getPreviewBackground = (palette) => {
	debugger;
	const { background } = parser.getBackground({
		x1: '0', x2: '0', y1: '0', y2: '0',
		stops: palette
	});

	return background;
};

const UseCase = ({ palette, ColorPicker, link, title }) => {
	const [localPalette, setLocalPalette] = useState(palette);

	const info = JSON.stringify(localPalette);
	console.log('Use case pallet ' , getPreviewBackground(localPalette));

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
					height: 32,
					palette: localPalette,
					onPaletteChange: setLocalPalette
				}}>
					{ ColorPicker ? <ColorPicker/> : null }
				</GradientPicker>
				<h4>Background preview</h4>
				<div className="preview" style={{ background: getPreviewBackground(localPalette)}}/>
			</div>
		</div>
	);
};

UseCase.propTypes = {
	palette: PropTypes.array,
	ColorPicker: PropTypes.any,
	link: PropTypes.string,
	title: PropTypes.string
};

export default UseCase;
