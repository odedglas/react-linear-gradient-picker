import React, { useRef } from 'react';
import { ANGLE_PICKER_PROP_TYPES } from '../propTypes';
import useDragging from '../hooks/useDragging';
import {
	centerOffset,
	clampAngle,
	snapAngle,
	pointDegrees
} from '../../lib';
import './index.css';

/**
 * Normalizes a given angle to be up to 360 deg.
 * @param angle
 * @returns {*|number}
 */
const normalizeAngle = (angle) => {
	angle = angle > 360 ? angle - 360 : angle;
	return angle < 0 ? angle + 360 : angle;
};

const AnglePicker = ({
	angle,
	setAngle,
	size = 48,
	snap = 5
}) => {
	const pickerRef = useRef();
	const sizeStyle = { height: size, width: size };

	const onAngleChange = ({ clientX, clientY }, useSnap = false) => {
		const center = centerOffset(pickerRef.current);
		const degrees = pointDegrees(clientX, clientY, center);

		const clamped = clampAngle(degrees);
		const angle = useSnap ? snapAngle(clamped, snap) : clamped;

		setAngle(normalizeAngle(angle));
	};

	const [drag] = useDragging({
		onDragStart: (e) => onAngleChange(e, true),
		onDrag: onAngleChange,
		onDragEnd: (angle) => {
			if (!angle) return;
			const snappedAngle = snapAngle(angle, snap);

			setAngle(snappedAngle);
		}
	});

	return (
		<div className="angle-holder">
			<div className="ap" ref={pickerRef} onMouseDown={drag} onTouchStart={drag} style={sizeStyle}>
				<span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
					<i className="aph"/>
				</span>
			</div>
			<div className="angle-inputs">
				<span onClick={() => setAngle(angle - 1)}>&#8722;</span>
				<input value={`${angle}°`} disabled/>
				<span onClick={() => setAngle(angle + 1)}>&#43;</span>
			</div>
		</div>
	);
};

AnglePicker.propTypes = ANGLE_PICKER_PROP_TYPES;

export default AnglePicker;
