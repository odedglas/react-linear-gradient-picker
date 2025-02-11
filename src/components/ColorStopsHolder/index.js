import React from 'react';
import ColorStop from '../ColorStop/index';
import { STOPS_HOLDER_PROP_TYPES } from '../propTypes';

const getStopsHolderStyle = (width, disabled, direction) => ({
	width: direction === 'horizontal' ? width : 17 ,
	height: direction === 'horizontal' ? 17 : width,
	position: 'relative',
	cursor: disabled ? 'default' : 'crosshair',
});

const ColorStopsHolder = ({ width, direction, stops, disabled = false, onAddColor, ...rest }) => {

	const handleColorAdd = (e) => {
		e.preventDefault();

		if (e.button) return;
		let offset;

		if (direction === 'horizontal') {
			offset = e.clientX - e.target.getBoundingClientRect().left;
		} else {
			offset = e.clientY - e.target.getBoundingClientRect().top;
		}

		onAddColor({ offset });
	};

	console.log('width');
	console.log(width);

	return (
		<div className="csh" style={getStopsHolderStyle(width, disabled, direction)} onMouseDown={handleColorAdd}>
			{stops.map(stop =>
				<ColorStop key={stop.id} stop={stop} direction={direction} {...rest} />
			)}
		</div>
	);
};

ColorStopsHolder.propTypes = STOPS_HOLDER_PROP_TYPES;

export default ColorStopsHolder;
