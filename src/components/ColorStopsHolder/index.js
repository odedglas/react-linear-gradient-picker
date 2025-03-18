import React from 'react';
import ColorStop from '../ColorStop/index';
import { STOPS_HOLDER_PROP_TYPES } from '../propTypes';
import { DIRECTIONS } from '../GradientPicker/constants';
import { COLOR_STOP_HOLDER_CLASSNAME } from './constants';


const getStopsHolderStyle = (width, disabled, direction) => ({
	width: direction === DIRECTIONS.HORIZONTAL ? width : 17,
	height: direction === DIRECTIONS.HORIZONTAL ? 17 : width,
	position: 'relative',
	cursor: disabled ? 'default' : 'crosshair',
});

const ColorStopsHolder = ({ width, direction, stops, disabled = false, onAddColor, ...rest }) => {

	const handleColorAdd = (e) => {
		e.preventDefault();

		if (e.button) return;
		const offset = direction === DIRECTIONS.HORIZONTAL
			? e.clientX - e.target.getBoundingClientRect().left
			: e.clientY - e.target.getBoundingClientRect().top;

		onAddColor({ offset });
	};

	return (
		<div className={COLOR_STOP_HOLDER_CLASSNAME} style={getStopsHolderStyle(width, disabled, direction)} onMouseDown={handleColorAdd}>
			{stops.map(stop =>
				<ColorStop key={stop.id} stop={stop} direction={direction} {...rest} />
			)}
		</div>
	);
};

ColorStopsHolder.propTypes = STOPS_HOLDER_PROP_TYPES;

export default ColorStopsHolder;
