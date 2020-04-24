import React, { useRef } from 'react';
import { noop } from '../../lib';
import { STOP_PROP_TYPES } from '../propTypes';
import useStopDragging from './hooks/useStopDragging';
import './index.css';

const ColorStop = ({ stop, limits, onPosChange, onDeleteColor, onDragStart = noop, onDragEnd = noop}) => {
	const colorStopRef = useRef();
	const [drag] = useStopDragging({
		stop,
		limits,
		onPosChange,
		onDragStart,
		onDragEnd,
		onDeleteColor,
		colorStopRef
	});

	const { offset, color, isActive } = stop;

	return (
		<div className={isActive ? 'cs active' : 'cs'}
			ref={colorStopRef}
			style={{ left: offset }}
			onMouseDown={drag}
			onTouchStart={drag}>
			<div style={{ backgroundColor: color }}/>
		</div>
	);
};

ColorStop.propTypes = STOP_PROP_TYPES;

export default ColorStop;
