import React from 'react';
import ColorStop from '../ColorStop/index';
import { STOPS_HOLDER_PROP_TYPES } from '../propTypes';
import { COLOR_STOP_HOLDER_CLASSNAME } from './constants';

const getStopsHolderStyle = (width, disabled, direction) => ({
	width: direction === 'vertical' ?  17 : width ,
	height: direction === 'vertical' ? width : 17,
	position: 'relative',
	cursor: disabled ? 'default' : 'crosshair',
});

const ColorStopsHolder = ({ width, direction, stops, disabled = false, onAddColor, ...rest }) => {

	const handleColorAdd = (e) => {
		e.preventDefault();

		if (e.button) return;
		let offset;

		if (direction === 'vertical') {
			offset = e.clientY - e.target.getBoundingClientRect().top;
		} else {
			offset = e.clientX - e.target.getBoundingClientRect().left;
		}

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
