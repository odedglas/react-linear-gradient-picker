import React from 'react'
import { STOP_PROP_TYPES } from '../propTypes';
import useStopDragging from './hooks/useStopDragging';
import './index.css'

const ColorStop = ({ stop, limits, onPosChange, onDragStart, onDragEnd }) => {

	const [drag] = useStopDragging({
		stop,
		limits,
		onPosChange,
		onDragStart,
		onDragEnd
	});

	const { pos, color, isActive } = stop;

	return (
		<div className={isActive ? 'cs active' : 'cs'}
		     style={{ left: pos }}
		     onMouseDown={drag}>
			<div style={{ backgroundColor: color }}/>
		</div>
	);
};

ColorStop.propTypes = STOP_PROP_TYPES;

export default ColorStop;
