import React, { useRef } from 'react';
import { ANGLE_PICKER_PROP_TYPES } from '../propTypes';
import useDragging from '../hooks/useDragging';
import {
	centerOffset,
	clampAngle,
	snapAngle,
	pointDegrees
} from '../../lib';
import './index.scss';

const AnglePicker = ({
	angle,
	setAngle,
	size = 24,
	snap = 5
}) => {
	const pickerRef = useRef();
	const sizeStyle = { height: size, width: size };

	const onAngleChange = ({ clientX, clientY }, useSnap = false) => {
		const center = centerOffset(pickerRef.current);
		const degrees = pointDegrees(clientX, clientY, center);

		const clamped = clampAngle(degrees);
		const angle = useSnap ? snapAngle(clamped, snap) : clamped;

		setAngle(angle);
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
		<>
			<div className="ap" ref={pickerRef} onMouseDown={drag} onTouchStart={drag} style={sizeStyle}>
				<span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
					<i className="aph"/>
				</span>
			</div>
			<div className="ai">
				<span onClick={() => setAngle(angle - 1)}>&#8722;</span>
				<input value={`${angle}°`} disabled/>
				<span onClick={() => setAngle(angle + 1)}>&#43;</span>
			</div>
		</>
	);
};

AnglePicker.propTypes = ANGLE_PICKER_PROP_TYPES;

export default AnglePicker;
