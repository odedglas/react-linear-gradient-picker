import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import GradientPickerPopover from '../../src/components/GradientPickerPopover';
import './index.css';

const WrappedSketchPicker = ({ onSelect, ...rest }) => (
	<SketchPicker {...rest}
		color={rest.color}
		onChange={c => {
			onSelect(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
		}}/>
);

WrappedSketchPicker.propTypes = {
	onSelect: PropTypes.func
};

const COLOR_MODES = {
	SOLID: 'solid',
	GRADIENT: 'gradient'
};

const PopoverStory = ({ showAngle = false }) => {
	const initialPallet = [
		{ offset: '0.00', color: 'rgba(255, 0, 150, 1)' },
		{ offset: '1.00', color: 'rgba(126, 32, 207, 1)' }
	];

	const initialColor = 'rgba(255, 0, 150, 1)';
	const initialMode = COLOR_MODES.SOLID;

	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState(initialMode);
	const [angle, setAngle] = useState(90);
	const [palette, setPalette] = useState(initialPallet);
	const [color, setColor] = useState(initialColor);

	const setGradient = (paletteArray) => {
		setPalette(paletteArray);
	}

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
			palette: palette,
			onPaletteChange: setGradient,
			color,
			onColorChange: setColor,
			mode,
			setMode,
		}}>
			<WrappedSketchPicker/>
		</GradientPickerPopover>
	);
};

export default PopoverStory;