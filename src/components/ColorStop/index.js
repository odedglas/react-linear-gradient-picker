import React, { useState, useRef, useEffect } from 'react';
import { noop } from '../../lib';
import { STOP_PROP_TYPES } from '../propTypes';
import { DIRECTIONS } from '../GradientPicker/constants';
import useStopDragging from './hooks/useStopDragging';
import './index.scss';

const ColorStop = ({ stop, limits, onPosChange, onDeleteColor, onDragStart = noop, onDragEnd = noop, direction}) => {
	const colorStopRef = useRef();
	const [allowRemoveOnDoubleClick, setAllowRemoveOnDoubleClick] = useState(false);
	const [drag] = useStopDragging({
		stop,
		limits,
		onPosChange,
		onDragStart,
		onDragEnd,
		onDeleteColor,
		colorStopRef,
		direction,
	});

	useEffect(() => {
		setTimeout(() => setAllowRemoveOnDoubleClick(true), 500);
	}, []);

	const { offset, color, isActive, opacity } = stop;

	return (
		<div
			className={`cs ${direction} ${isActive ? 'active' : ''}`}
			ref={colorStopRef}
			style={direction === DIRECTIONS.HORIZONTAL ? { left: offset } : { top: offset }}
			onMouseDown={drag}
			onDoubleClick={() => {
				allowRemoveOnDoubleClick && onDeleteColor(stop.id);
			}}
			onTouchStart={drag}>
			<div style={{ backgroundColor: color, opacity }}/>
		</div>
	);
};

ColorStop.propTypes = STOP_PROP_TYPES;

export default ColorStop;
