import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GradientPicker from '../src';

const UseCase = ({ palette, ColorPicker, link, title }) => {
	const [localPalette, setLocalPalette] = useState(palette);

	const info = JSON.stringify(localPalette);

	return (
		<div className="use-case-content">
			<div className="inner">
				<div className="title">
					With&nbsp;
					<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
				</div>
				<div className="result">{ info } </div>)
				<GradientPicker {...{
					width: 320,
					height: 32,
					palette: localPalette,
					onPaletteChange: setLocalPalette
				}}>
					{ ColorPicker ? <ColorPicker/> : null }
				</GradientPicker>
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
