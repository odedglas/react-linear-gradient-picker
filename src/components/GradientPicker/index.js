import React, { useState, useMemo } from 'react';
import ColorStopsHolder from '../ColorStopsHolder/index';
import Palette from '../Palette/index';
import ColorPicker from '../ColorPicker/index';
import { GRADIENT_PICKER_PROP_TYPES } from '../propTypes/index';
import { sortPalette } from '../../lib/index';
import {
	HALF_STOP_WIDTH,
	DEFAULT_HEIGHT,
	DEFAULT_WIDTH,
	DEFAULT_STOP_REMOVAL_DROP,
	DEFAULT_MAX_STOPS,
	DEFAULT_MIN_STOPS
} from './constants';
import './index.css';

const nextColorId = (palette) => Math.max(...palette.map(({ id }) => id)) + 1;

const mapIdToPalette = (palette) => palette.map((color, index) => ({
	...color,
	id: color.id || index + 1
}));

const mapPaletteToStops = ({ palette, activeId, width }) => palette.map((color) => ({
	...color,
	id: color.id,
	offset: width * color.offset - HALF_STOP_WIDTH,
	isActive: color.id === activeId
}));

const getPaletteColor = (palette, id) => {
	const color = palette.find(color => color.id === id);
	return { ...color, offset: Number(color.offset) };
};

const GradientPicker = ({
	palette,
	paletteHeight = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
	stopRemovalDrop = DEFAULT_STOP_REMOVAL_DROP,
	minStops = DEFAULT_MIN_STOPS,
	maxStops = DEFAULT_MAX_STOPS,
	children,
	flatStyle = false,
	onPaletteChange
}) => {
	palette = mapIdToPalette(palette);

	const [defaultActiveColor] = palette;
	const [activeColorId, setActiveColorId] = useState(defaultActiveColor.id);

	const limits = useMemo(() => {
		const min = -HALF_STOP_WIDTH;
		const max = width - HALF_STOP_WIDTH;

		return { min, max, drop: stopRemovalDrop };
	}, [width]);

	const handleColorAdd = ({ offset }) => {
		if (palette.length >= maxStops) return;

		const { color } = getPaletteColor(palette, activeColorId);
		const entry = { id: nextColorId(palette), offset: offset / width, color };

		const updatedPalette = [...palette, entry];

		setActiveColorId(entry.id);
		handlePaletteChange(updatedPalette);
	};

	const handleColorDelete = (id) => {
		if (palette.length <= minStops) return;

		const updatedPalette = palette.filter(c => c.id !== id);
		const activeId = updatedPalette.reduce((a, x) => x.offset < a.offset ? x : a, updatedPalette[0]).id;

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
			.map(({ offset, id, ...rest }) => ({
				...rest,
				id,
				offset: Number(offset).toFixed(3),
				active: id === activeColorId
			}));

		onPaletteChange(sortedPalette);
	};

	const handleStopPosChange = ({ id, offset }) => {
		const updatedPalette = palette.map(c =>
			id === c.id ? { ...c, offset: (offset + HALF_STOP_WIDTH) / width } : c
		);

		handlePaletteChange(updatedPalette);
	};

	const colorPicker = () => {
		const { color, opacity } = getPaletteColor(palette, activeColorId);

		const props = {
			color,
			opacity,
			...(flatStyle && {
				width,
				className: 'gp-flat',
			}),
			onSelect: handleColorSelect
		};

		if (!children) {
			return <ColorPicker {...props} />;
		}

		const child = React.Children.only(children);
		return React.cloneElement(child, props);
	};

	const paletteWidth = width - HALF_STOP_WIDTH;
	const stopsHolderDisabled = palette.length >= maxStops;

	return (
		<div className="gp">
			<Palette width={paletteWidth} height={paletteHeight} palette={palette}/>
			<ColorStopsHolder
				width={paletteWidth}
				disabled={stopsHolderDisabled}
				stops={mapPaletteToStops({
					palette,
					width: paletteWidth,
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