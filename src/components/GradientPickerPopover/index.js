import React, { useState } from 'react';
import { GRADIENT_PICKER_POPOVER_PROP_TYPES } from '../propTypes';
import { getGradientPreview } from '../../lib';
import AnglePicker from '../AnglePicker';
import GradientPicker from '../GradientPicker';
import GradientTypePicker, { GRADIENT_TYPES } from '../GradientTypePicker';
import './index.scss';

const defaultTrigger = (background, togglePicker) => (
	<div className="trigger" onClick={togglePicker}>
		<div className="inner" style={{ background }}/>
	</div>
);

const GradientPickerPopover = ({
	palette,
	open = false,
	setOpen,
	trigger = defaultTrigger,
	showAnglePicker = false,
	angle,
	setAngle,
	...gradientPickerProps
}) => {
	const [gradientType, setGradientType] = useState(GRADIENT_TYPES.LINEAR);
	const togglePicker = () => setOpen(!open);
	const { background } = getGradientPreview(palette, angle, gradientType);

	const supportsAnglePicker = gradientType === GRADIENT_TYPES.LINEAR;

	return (
		<div className="gpw">
			{ trigger(background, togglePicker) }
			{ open && (
				<>
					<div className="overlay" onClick={() => setOpen(false)}/>
					<div className="popover">
						<div className="controls-wrapper">
							<GradientTypePicker gradientType={gradientType}
								onGradientTypeChange={setGradientType}/>
							{ (showAnglePicker && supportsAnglePicker) && (
								<AnglePicker angle={angle} setAngle={setAngle} size={28}/>
							)}
						</div>
						<GradientPicker {...gradientPickerProps} palette={palette} flatStyle/>
					</div>
				</>
			)}
		</div>
	);
};

GradientPickerPopover.propTypes = GRADIENT_PICKER_POPOVER_PROP_TYPES;

export default GradientPickerPopover;