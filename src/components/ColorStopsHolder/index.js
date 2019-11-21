import React from 'react'
import ColorStop from '../ColorStop/index'
import { STOPS_HOLDER_PROP_TYPES } from '../propTypes';

const getStopsHolderStyle = (width) => ({
	width,
	height: 17,
	position: 'relative',
	cursor: 'crosshair'
});

const ColorStopsHolder = ({ width, stops, onAddColor, ...rest }) => {

	const handleColorAdd = (e) => {
		e.preventDefault();

		if (e.button) return;

		const pos = e.clientX - e.target.getBoundingClientRect().left;
		onAddColor({ pos, pointX: e.clientX });
	};

	return (
		<div className="csh" style={getStopsHolderStyle(width)} onMouseDown={handleColorAdd}>
			{stops.map(stop =>
				<ColorStop key={stop.id} stop={stop} {...rest} />
			)}
		</div>
	);
};

ColorStopsHolder.propTypes = STOPS_HOLDER_PROP_TYPES;

export default ColorStopsHolder
