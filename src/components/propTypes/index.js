import { number, string, bool, arrayOf, func, shape } from 'prop-types';

const STOP_SHAPE = shape({
	id: number.isRequired,
	color: string.isRequired,
	offset: number.isRequired,
	isActive: bool.isRequired,
	pointX: number
});

const LIMITS_SHAPE = shape({
	min: number.isRequired,
	max: number.isRequired,
	drop: number,
});

const PALETTE_COLOR_SHAPE = shape({
	id: number,
	color: string.isRequired,
	offset: string.isRequired,
	opacity: number,
});

export const STOP_PROP_TYPES = {
	stop: STOP_SHAPE.isRequired,
	limits: LIMITS_SHAPE.isRequired,
	onPosChange: func.isRequired,
	onDeleteColor: func.isRequired,
	onDragStart: func,
	onDragEnd: func
};

export const STOPS_HOLDER_PROP_TYPES = {
	width: number.isRequired,
	stops: arrayOf(STOP_SHAPE),
	limits: LIMITS_SHAPE,
	disabled: bool,
	onPosChange: func.isRequired,
	onAddColor: func.isRequired,
	onDeleteColor: func.isRequired,
	onDragStart: func,
	onDragEnd: func,
};

export const PALETTE_PROP_TYPES = {
	width: number.isRequired,
	height: number.isRequired,
	palette: arrayOf(PALETTE_COLOR_SHAPE).isRequired
};

export const GRADIENT_PICKER_PROP_TYPES = {
	onPaletteChange: func.isRequired,
	paletteHeight: number,
	width: number,
	stopRemovalDrop: number,
	maxStops: number,
	minStops: number,
	flatStyle: bool,
	palette: arrayOf(PALETTE_COLOR_SHAPE)
};

export const ANGLE_PICKER_PROP_TYPES = {
	angle: number.isRequired,
	setAngle: func.isRequired,
	size: number,
	snap: number
};

export const GRADIENT_PICKER_POPOVER_PROP_TYPES = {
	...GRADIENT_PICKER_PROP_TYPES,
	...ANGLE_PICKER_PROP_TYPES,
	showAnglePicker: bool,
	open: bool.isRequired,
	setOpen: func.isRequired,
	trigger: func,
};