import React, { useState, useMemo } from 'react';
import ColorStopsHolder from './components/ColorStopsHolder';
import Palette from './components/Palette';
import ColorPicker from './components/ColorPicker';
import { GRADIENT_PICKER_PROP_TYPES } from './components/propTypes';
import { sortPalette } from './lib';
import {
	HALF_STOP_WIDTH,
	DEFAULT_HEIGHT,
	DEFAULT_WIDTH,
	DEFAULT_PALETTE
} from './constants';

const nextColorId = (palette) => Math.max(...palette.map(({ id }) => id)) + 1;

const mapIdToPalette = (palette) => palette.map((color, index) => ({
	...color,
	id: color.id || index + 1
}));

const mapPaletteToStops = ({ palette, activeId, activePoint, width }) => palette.map((color) => ({
	...color,
	id: color.id,
	pos: width * color.pos - HALF_STOP_WIDTH,
	isActive: color.id === activeId,
	pointX: activePoint
}));

const getPaletteColor = (palette, id) => {
	const color = palette.find(color => color.id === id);
	return { ...color, pos: Number(color.pos) };
};

const GradientPicker = ({
	palette = DEFAULT_PALETTE,
	height = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
	children,
	onPaletteChange
}) => {
	palette = mapIdToPalette(palette);

	const [activeColorId, setActiveColorId] = useState(1);
	const [activePoint, setActivePoint] = useState();

	const limits = useMemo(() => {
		const min = -HALF_STOP_WIDTH;
		const max = width - HALF_STOP_WIDTH;

		return { min, max, drop: 50 };
	}, [width]);

	const handleColorAdd = ({ pos, pointX }) => {
		const { color } = getPaletteColor(palette, activeColorId);
		const entry = { id: nextColorId(palette), pos: pos / width, color };

		const updatedPalette = [...palette, entry];

		setActivePoint(pointX);
		handlePaletteChange(updatedPalette);
	};

	const handleColorDelete = (id) => {
		const updatedPalette = palette.filter(c => c.id !== id);
		const activeId = updatedPalette.reduce((a, x) => x.pos < a.pos ? x : a, palette[0]).id;

		setActiveColorId(activeId);
		handlePaletteChange(updatedPalette);
	};

	const onStopDragStart = (id) => {
		setActiveColorId(id);
	};

	const handleColorSelect = (color, opacity = 1) => {
		palette = palette.map(c =>
			activeColorId === c.id ? { ...c, color, opacity } : c
		);

		handlePaletteChange(palette);
	};

	const handlePaletteChange = (palette) => {
		const sortedPalette = sortPalette(palette)
			.map(({ pos, ...rest }) => ({ pos: Number(pos).toFixed(3), ...rest }));

		onPaletteChange(sortedPalette);
	};

	const handleStopPosChange = ({ id, pos }) => {
		const updatedPalette = palette.map(c =>
			id === c.id ? { ...c, pos: (pos + HALF_STOP_WIDTH) / width } : c
		);

		handlePaletteChange(updatedPalette);
	};

	const colorPicker = () => {
		const { color, opacity } = getPaletteColor(palette, activeColorId);

		const props = { color, opacity, onSelect: handleColorSelect };

		if (!children) {
			return <ColorPicker {...props} />;
		}

		const child = React.Children.only(children);
		return React.cloneElement(child, props);
	};

	return (
		<div>
			<Palette width={width} height={height} palette={palette}/>
			<ColorStopsHolder
				width={width}
				stops={mapPaletteToStops({
					activePoint,
					width,
					palette,
					activeId: activeColorId
				})}
				limits={limits}
				onPosChange={handleStopPosChange}
				onAddColor={handleColorAdd}
				onDeleteColor={handleColorDelete}
				onDragStart={onStopDragStart}
			/>
			{colorPicker()}
		</div>
	);
};

GradientPicker.propTypes = GRADIENT_PICKER_PROP_TYPES;

export default GradientPicker;