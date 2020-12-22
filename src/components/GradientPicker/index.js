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
	onPaletteChange,
	setDragOverPopover,
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
		setDragOverPopover(true);
	};

	const onStopDragEnd = (id) => {
		setDragOverPopover(false);
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
			<div style={{
				position: 'absolute',
				height: paletteHeight,
				marginTop: paletteHeight / 4,
				width: paletteWidth + 30
			}}>
				<button className="icon-trash" style={{float: 'right'}} 
					onClick={
						() => {
							handleColorDelete(activeColorId);
						}
					}>
					<div className="trash-lid" style={{backgroundColor: '#909090'}}></div>
					<div className="trash-container" style={{backgroundColor: '#909090'}}></div>
					<div className="trash-line-1"></div>
					<div className="trash-line-2"></div>
					<div className="trash-line-3"></div>
				</button>
			</div>
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
				onDragEnd={onStopDragEnd}
			/>
			{colorPicker()}
			<style jsx global>
				{`
					.icon-trash {
						width: 20px;
						height: 20px;
						position: relative;
						overflow: hidden;
						margin-left: 25px;
						margin-bottom: 25px;
						border: 0;
						background: transparent;
					}

					.icon-trash:hover, .icon-trash:focus, .icon-trash:active {
						cursor: pointer;
						border: 0;
						background: transparent;
						outline: 0;
					}

					.icon-trash .trash-lid {
						width: 62%;
						height: 10%;
						position: absolute;
						left: 50%;
						margin-left: -31%;
						top: 10.5%;
						background-color: #000;
						border-top-left-radius: 80%;
						border-top-right-radius: 80%;
						-webkit-transform: rotate(-5deg);
						-moz-transform: rotate(-5deg);
						-ms-transform: rotate(-5deg);
						transform: rotate(-5deg); 
					}

					.icon-trash .trash-lid:after {
						content: "";
						width: 26%;
						height: 100%;
						position: absolute;
						left: 50%;
						margin-left: -13%;
						margin-top: -10%;
						background-color: inherit;
						border-top-left-radius: 30%;
						border-top-right-radius: 30%;
						-webkit-transform: rotate(-1deg);
						-moz-transform: rotate(-1deg);
						-ms-transform: rotate(-1deg);
						transform: rotate(-1deg); 
					}

					.icon-trash .trash-container {
						width: 56%;
						height: 65%;
						position: absolute;
						left: 50%;
						margin-left: -28%;
						bottom: 10%;
						background-color: #000;
						border-bottom-left-radius: 25%;
						border-bottom-right-radius: 25%;
					}

					.icon-trash .trash-container:after {
						content: "";
						width: 110%;
						height: 12%;
						position: absolute;
						left: 50%;
						margin-left: -55%;
						top: 0;
						background-color: inherit;
						border-bottom-left-radius: 55%;
						border-bottom-right-radius: 55%;
					}

					.icon-trash .trash-line-1 {
						width: 4%;
						height: 50%;
						position: absolute;
						left: 38%;
						margin-left: -2%;
						bottom: 17%;
						background-color: #fff;
					}

					.icon-trash .trash-line-2 {
						width: 4%;
						height: 50%;
						position: absolute;
						left: 50%;
						margin-left: -2%;
						bottom: 17%;
						background-color: #fff;
					}

					.icon-trash .trash-line-3 {
						width: 4%;
						height: 50%;
						position: absolute;
						left: 62%;
						margin-left: -2%;
						bottom: 17%;
						background-color: #fff;
					}

				`}
			</style>
		</div>
	);
};

GradientPicker.propTypes = GRADIENT_PICKER_PROP_TYPES;

export default GradientPicker;