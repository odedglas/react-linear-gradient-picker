import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import GradientPickerPopover from '../../src/components/GradientPickerPopover';
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

const PopoverStory = (showAngle) => {
	const [open, setOpen] = useState(false);
	const [angle, setAngle] = useState(90);
	const [palette, setPalette] = useState(initialPallet);

	return (
		<GradientPickerPopover {...{
			open,
			setOpen,
			angle,
			setAngle,
			showAnglePicker: showAngle,
			width: 220,
			maxStops: 3,
			paletteHeight: 32,
			palette,
			onPaletteChange: setPalette
		}}>
			<WrappedSketchPicker/>
		</GradientPickerPopover>
	);
};

export default PopoverStory;