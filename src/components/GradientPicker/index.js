import React, { useState, useMemo, useRef, useEffect } from 'react';
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
	DEFAULT_MIN_STOPS,
	DEFAULT_FLOATING_PICKER,
	DEFAULT_ANGLE
} from './constants';
import './index.css';

const nextColorId = (palette) => Math.max(...palette.map(({ id }) => id)) + 1;

const mapIdToPalette = (palette) => palette.map((color, index) => ({
	...color,
	id: color.id || index + 1
}));

const mapPaletteToStops = ({ palette, activeId, activePoint, width }) => palette.map((color) => ({
	...color,
	id: color.id,
	offset: width * color.offset - HALF_STOP_WIDTH,
	isActive: color.id === activeId,
	pointX: activePoint
}));

const getPaletteColor = (palette, id) => {
	const color = palette.find(color => color.id === id);
	return { ...color, offset: Number(color.offset) };
};

const useOutsideClick = (ref, callback) => {
	const handleClick = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};

const GradientPicker = ({
	palette,
	paletteHeight = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
	stopRemovalDrop = DEFAULT_STOP_REMOVAL_DROP,
	minStops = DEFAULT_MIN_STOPS,
	maxStops = DEFAULT_MAX_STOPS,
	children,
	onPaletteChange,
	floatingPicker = DEFAULT_FLOATING_PICKER,
	angle = DEFAULT_ANGLE
}) => {
	palette = mapIdToPalette(palette);

	const [activeColorId, setActiveColorId] = useState(1);
	const [activePoint, setActivePoint] = useState();
	const [showPicker, setShowPicker] = useState(false);
	const mainRef = useRef();
	useOutsideClick(mainRef, () => setShowPicker(false));

	const limits = useMemo(() => {
		const min = -HALF_STOP_WIDTH;
		const max = width - HALF_STOP_WIDTH;

		return { min, max, drop: stopRemovalDrop };
	}, [width]);

	const handleColorAdd = ({ offset, pointX }) => {
		if (palette.length >= maxStops) return;

		const { color } = getPaletteColor(palette, activeColorId);
		const entry = { id: nextColorId(palette), offset: offset / width, color };

		const updatedPalette = [...palette, entry];

		setActivePoint(pointX);
		handlePaletteChange(updatedPalette);
	};

	const handleColorDelete = (id) => {
		if (palette.length <= minStops) return;

		const updatedPalette = palette.filter(c => c.id !== id);
		const activeId = updatedPalette.reduce((a, x) => x.offset < a.offset ? x : a, palette[0]).id;

		setActiveColorId(activeId);
		handlePaletteChange(updatedPalette);
	};

	const onStopDragStart = (id) => {
		setActiveColorId(id);
		setShowPicker(true);
	};

	const handleColorSelect = (color, opacity = 1) => {
		palette = palette.map(c =>
			activeColorId === c.id ? { ...c, color, opacity } : c
		);

		handlePaletteChange(palette);
	};

	const handlePaletteChange = (palette) => {
		const sortedPalette = sortPalette(palette)
			.map(({ offset, ...rest }) => ({ offset: Number(offset).toFixed(3), ...rest }));

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

		const props = { color, opacity, onSelect: handleColorSelect };

		if (floatingPicker) {
			const style = {
				position: 'absolute',
				zIndex: 3,
				top: '100%'
			};
			if (floatingPicker && !showPicker) {
				style.display = 'none';
			}

			props.style = style;
		}

		if (!children) {
			return <ColorPicker {...props} />;
		}

		const child = React.Children.only(children);
		return React.cloneElement(child, props);
	};

	const paletteWidth = width - HALF_STOP_WIDTH * 2;
	const stopsHolderDisabled = palette.length >= maxStops;

	return (
		<div className="gp" ref={mainRef}>
			<Palette width={paletteWidth} height={paletteHeight} palette={palette} angle={angle}/>
			<ColorStopsHolder
				width={paletteWidth}
				disabled={stopsHolderDisabled}
				stops={mapPaletteToStops({
					activePoint,
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