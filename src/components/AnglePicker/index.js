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

const snapAngle = (angle, snap) => {
	const module = angle % snap;

	if (module === 0) { return angle; }

	const snappingAddition = module > snap / 2 ? snap - module : (-1 * module);
	return angle + snappingAddition;
};

const getPointDegrees = (pointX, pointY, center) => {
	const y = pointY - center.y;
	const x = pointX - center.x;

	const radians = Math.atan2(y, x);
	return Math.round(radians * (180/Math.PI)) + 90;
};

const AnglePicker = ({ angle, onChange, size = 48, snap = 5 }) => {
	const pickerRef = useRef();
	const sizeStyle = { height: size, width: size };

	const onAngleChange = ({ clientX, clientY }) => {
		const center = getPickerCenter(pickerRef.current);
		const degrees = getPointDegrees(clientX, clientY, center);

		const clamped = clampAngle(degrees);

		onChange(clamped);
		return clamped;
	};

	const [drag] = useDragging({
		onDragStart: onAngleChange,
		onDrag: onAngleChange,
		onDragEnd: (angle) => {
			if (!angle) return;
			const snappedAngle = snapAngle(angle, snap);
			console.log('Snapping : ', angle, snappedAngle);

			onChange(snappedAngle);
		}
	});

	return (
		<div className="ap" ref={pickerRef} onMouseDown={drag} style={sizeStyle}>
			<span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
				<i className="aph"/>
			</span>
		</div>
	);
};

AnglePicker.propTypes = {PALETTE_PROP_TYPES};

export default AnglePicker;
