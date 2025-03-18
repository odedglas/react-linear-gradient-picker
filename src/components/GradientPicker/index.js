import React, { useState, useMemo, useRef, useCallback } from 'react';
import ColorStopsHolder from '../ColorStopsHolder/index';
import Palette from '../Palette/index';
import ColorPicker from '../ColorPicker/index';
import { GRADIENT_PICKER_PROP_TYPES } from '../propTypes/index';
import { sortPalette, noop } from '../../lib/index';
import { useClickOutside } from '../hooks/useClickOutside';
import {
	HALF_STOP_WIDTH,
	DEFAULT_HEIGHT,
	DEFAULT_WIDTH,
	DEFAULT_STOP_REMOVAL_DROP,
	DEFAULT_MAX_STOPS,
	DEFAULT_MIN_STOPS,
	DEFAULT_DIRECTION,
	GRADIENT_PICKER_CLASSNAME,
	COLOR_PICKER_CLASSNAME,
	IGNORED_CLICK_OUTSIDE_SELECTORS
} from './constants';
import './index.scss';

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
	const color = palette.find(color => color.id === id) || palette[0];

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
	onPaletteChange,
	onColorStopSelect = noop,
	direction = DEFAULT_DIRECTION,
	popoverColorPicker = false
}) => {
	palette = mapIdToPalette(palette);
	const [isPickerOpen, setPickerOpen] = React.useState(false);
	const [defaultActiveColor] = palette;
	const [activeColorId, setActiveColorId] = useState(defaultActiveColor.id);
	const pickerRef = useRef(null);

	const limits = useMemo(() => {
		const min = -HALF_STOP_WIDTH;
		const max = width - HALF_STOP_WIDTH;

		return { min, max, drop: stopRemovalDrop };
	}, [width]);

	React.useEffect(() => {
		if (!popoverColorPicker) {
			setPickerOpen(true);
		}
	}, [popoverColorPicker, setPickerOpen]);

	const closePicker = useCallback(() => setPickerOpen(false), [setPickerOpen]);

	useClickOutside({
		pickerRef,
		callback: closePicker,
		ignoredSelectors: IGNORED_CLICK_OUTSIDE_SELECTORS,
		enabled: popoverColorPicker,
	});

	const handleColorAdd = ({ offset }) => {
		if (palette.length >= maxStops) return;
		if (popoverColorPicker) {
			setPickerOpen(true);
		}

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
		setPickerOpen(true);
		if (popoverColorPicker) {
			setPickerOpen(true);
		}

		if (id !== activeColorId) {
			setActiveColorId(id);

			const color = palette.find((color) => color.id === id);
			onColorStopSelect(color);
		}
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
			className: COLOR_PICKER_CLASSNAME,
			...(flatStyle && {
				width,
				className: `gp-flat ${COLOR_PICKER_CLASSNAME}`,
			}),
			onSelect: handleColorSelect,
			direction
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
		<div
			ref={pickerRef}
			className={`${GRADIENT_PICKER_CLASSNAME} ${direction}`}
		>
			<Palette
				width={paletteWidth}
				height={paletteHeight}
				palette={palette}
				direction={direction}
			/>
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
				direction={direction}
			/>
				{isPickerOpen && colorPicker()}
		</div>
	);
};

GradientPicker.propTypes = GRADIENT_PICKER_PROP_TYPES;

export default GradientPicker;