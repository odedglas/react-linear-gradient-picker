import React, { useState, useRef, useEffect } from 'react';
import { noop } from '../../lib';
import { STOP_PROP_TYPES } from '../propTypes';
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
			className={isActive ? 'cs active' : 'cs'}
			ref={colorStopRef}
			style={direction === 'horizontal' ? { left: offset } : { top: offset, transform: 'rotate(-90deg) translate(4px, 2px)' } }
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
