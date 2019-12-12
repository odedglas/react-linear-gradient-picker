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

const AnglePicker = ({ angle, onChange, size = 48, snap = 5, showValue = false }) => {
	const pickerRef = useRef();
	const sizeStyle = { height: size, width: size };

	const onAngleChange = ({ clientX, clientY }, useSnap = false) => {
		const center = centerOffset(pickerRef.current);
		const degrees = pointDegrees(clientX, clientY, center);

		const clamped = clampAngle(degrees);
		const angle = useSnap ? snapAngle(clamped, snap) : clamped;

		onChange(angle);
		return angle;
	};

	const [drag] = useDragging({
		onDragStart: (e) => onAngleChange(e, true),
		onDrag: onAngleChange,
		onDragEnd: (angle) => {
			if (!angle) return;
			const snappedAngle = snapAngle(angle, snap);

			onChange(snappedAngle);
		}
	});

	return (
		<div className="ap" ref={pickerRef} onMouseDown={drag} style={sizeStyle}>
			<span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
				<i className="aph"/>
			</span>
			{showValue && <span className="apl">{angle}°</span>}
		</div>
	);
};

AnglePicker.propTypes = ANGLE_PICKER_PROP_TYPES;

export default AnglePicker;
