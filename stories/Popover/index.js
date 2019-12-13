import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { getGradientPreview } from '../../src/lib';
import GradientPicker from '../../src/components/GradientPicker';
import './index.css';

const addOpacityToHex = (color, opacity = 1) => {
	if (opacity === 1 || color.length > 9) {
		return color;
	}

	return color + Math.floor(opacity * 255).toString(16);
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => (
	<SketchPicker {...rest}
		color={addOpacityToHex(rest.color, rest.opacity)}
		onChange={c => {
			onSelect(c.hex, c.rgb.a);
		}}/>
);

WrappedSketchPicker.propTypes = {
	onSelect: PropTypes.func
};

const initialPallet = [
	{ offset: '0.00', color: 'rgb(238, 241, 11)' },
	{ offset: '1.00', color: 'rgb(126, 32, 207)' }
];

const PopoverStory = () => {
	const [displayPicker, setDisplayPicker] = useState(false);
	const [palette, setPalette] = useState(initialPallet);

	const togglePicker = () => setDisplayPicker(!displayPicker);
	const { background } = getGradientPreview(palette);

	return (
		<div className="gpw">
			<div className="trigger" onClick={togglePicker}>
				<div className="inner" style={{ background }}/>
			</div>
			{ displayPicker && (
				<>
					<div className="overlay" onClick={() => setDisplayPicker(false)}/>
					<div className="popover">
						<GradientPicker {...{
							width: 220,
							flatStyle: true,
							maxStops: 3,
							paletteHeight: 32,
							palette,
							onPaletteChange: setPalette
						}}>
							<WrappedSketchPicker/>
						</GradientPicker>
					</div>
				</>
			) }
		</div>
	);
};

export default PopoverStory;