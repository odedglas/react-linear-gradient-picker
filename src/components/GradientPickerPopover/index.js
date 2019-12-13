import React from 'react';
import GradientPicker from '../GradientPicker';
import { GRADIENT_PICKER_POPOVER_PROP_TYPES } from '../propTypes/index';
import { getGradientPreview } from '../../lib';
import AnglePicker from '../AnglePicker';
import './index.css';

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

	const togglePicker = () => setOpen(!open);
	const { background } = getGradientPreview(palette, angle);

	const onAngleInputChange = (angle) => {
		angle = angle > 360 ? angle - 360 : angle;
		angle = angle < 0 ? angle + 360 : angle;

		setAngle(angle);
	};

	return (
		<div className="gpw">
			{ trigger(background, togglePicker) }
			{ open && (
				<>
					<div className="overlay" onClick={() => setOpen(false)}/>
					<div className="popover">
						<GradientPicker {...gradientPickerProps} palette={palette} flatStyle/>
						{ showAnglePicker && (
							<div className="angle-holder">
								<AnglePicker angle={angle} setAngle={setAngle} size={32}/>
								<div className="angle-inputs">
									<span onClick={() => onAngleInputChange(angle - 1)}>&#8722;</span>
									<input value={`${angle}°`} disabled/>
									<span onClick={() => onAngleInputChange(angle + 1)}>&#43;</span>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
};

GradientPickerPopover.propTypes = GRADIENT_PICKER_POPOVER_PROP_TYPES;

export default GradientPickerPopover;