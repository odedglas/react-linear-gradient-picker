import React, { useRef } from 'react';
import { PALETTE_PROP_TYPES } from '../propTypes';
import useDragging from '../hooks/useDragging';
import './index.css';

const getPickerCenter = (el) => {
	const { top, left, height, width } = el.getBoundingClientRect();

	return {
		y: top + height / 2,
		x: left + width / 2
	}
};

const clampAngle = (angle) => {
	if (angle < 0) {
		return 360 + angle;
	}

	if (angle > 360) {
		return angle - 360
	}

	return angle;
};

const AnglePicker = ({ angle, onChange, adjustment = 180, size = 48 }) => {
	const pickerRef = useRef();

	const onAngleChange = ({ clientX, clientY }) => {

		const center = getPickerCenter(pickerRef.current);
		const y = clientY - center.y;
		const x = clientX - center.x;

		const radians = Math.atan2(y, x);
		const degrees = Math.round(radians * (180/Math.PI)) + 90;

		onChange(clampAngle(degrees));
	};

	const [drag] = useDragging({
		onDrag: onAngleChange,
	});

	const sizeStyle = { height: size, width: size };
	return (
		<div className="ap" ref={pickerRef} onClick={onAngleChange} onMouseDown={drag} style={sizeStyle}>
			<span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
				<i className="aph"/>
			</span>
		</div>
	);
};

AnglePicker.propTypes = {PALETTE_PROP_TYPES};

export default AnglePicker;
