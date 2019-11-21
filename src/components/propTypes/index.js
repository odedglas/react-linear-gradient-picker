import { number, string, bool, arrayOf, func, shape } from 'prop-types';
import PropTypes from "prop-types";

const STOP_SHAPE = shape({
	id: number.isRequired,
	color: string.isRequired,
	pos: number.isRequired,
	isActive: bool.isRequired,
	pointX: number
});

const LIMITS_SHAPE = shape({
	min: number.isRequired,
	max: number.isRequired,
	drop: number,
});

const PALETTE_COLOR_SHAPE = shape({
	id: number.isRequired,
	color: string.isRequired,
	pos: string.isRequired,
	opacity: number,
});

export const STOP_PROP_TYPES = {
	stop: STOP_SHAPE.isRequired,
	limits: LIMITS_SHAPE.isRequired,
	onPosChange: func.isRequired,
	onDragStart: func.isRequired,
	onDragEnd: func.isRequired
};

export const STOPS_HOLDER_PROP_TYPES = {
	width: number.isRequired,
	stops: arrayOf(STOP_SHAPE),
	limits: LIMITS_SHAPE,
	onPosChange: func.isRequired,
	onAddColor: func.isRequired,
	onDragStart: func.isRequired,
	onDragEnd: func.isRequired,
};

export const PALETTE_PROP_TYPES = {
	width: number.isRequired,
	height: number.isRequired,
	palette: arrayOf(PALETTE_COLOR_SHAPE).isRequired
};

export const GRADIENT_PICKER_PROP_TYPES = {
	onPaletteChange: func.isRequired,
	height: number,
	width: number,
	palette: arrayOf(shape({
		color: string.isRequired,
		pos: string.isRequired,
		opacity: number,
	}))
};