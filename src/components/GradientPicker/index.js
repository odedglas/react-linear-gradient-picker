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
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
				width: paletteWidth,
			}}>
				<Palette width={paletteWidth - 45} height={paletteHeight} palette={palette}/>
				<div style={{
					position: 'fixed',
					height: paletteHeight,
					marginTop: 1,
					width: paletteWidth,
				}}>
					<button className="icon-trash"
						onClick={
							() => {
								handleColorDelete(activeColorId);
							}
						}>
						<div className="icon-trash-background"></div>
					</button>
				</div>
				<ColorStopsHolder
					width={paletteWidth - 45}
					disabled={stopsHolderDisabled}
					stops={mapPaletteToStops({
						palette,
						width: paletteWidth - 45,
						activeId: activeColorId
					})}
					limits={limits}
					onPosChange={handleStopPosChange}
					onAddColor={handleColorAdd}
					onDeleteColor={handleColorDelete}
					onDragStart={onStopDragStart}
					onDragEnd={onStopDragEnd}
				/>
			</div>
			{colorPicker()}
			<style jsx global>
				{`
					.icon-trash {
						width: 20px;
						height: 20px;
						position: relative;
						overflow: hidden;
						padding: 15px;
						border: 1px solid #a7a2a2;
						background: transparent;
						float: right;
						border-radius: 3px;
					}

					.icon-trash-background {
						margin-top: -10px;
    					margin-left: -10px;
						width: 20px;
						height: 20px;
						background-size: contain;
						background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTc5MiIgdmlld0JveD0iMCAwIDE3OTIgMTc5MiIgd2lkdGg9IjE3OTIiPjxwYXRoIGQ9Ik03MDQgNzM2djU3NnEwIDE0LTkgMjN0LTIzIDloLTY0cS0xNCAwLTIzLTl0LTktMjN2LTU3NnEwLTE0IDktMjN0MjMtOWg2NHExNCAwIDIzIDl0OSAyM3ptMjU2IDB2NTc2cTAgMTQtOSAyM3QtMjMgOWgtNjRxLTE0IDAtMjMtOXQtOS0yM3YtNTc2cTAtMTQgOS0yM3QyMy05aDY0cTE0IDAgMjMgOXQ5IDIzem0yNTYgMHY1NzZxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi01NzZxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN6bTEyOCA3MjR2LTk0OGgtODk2djk0OHEwIDIyIDcgNDAuNXQxNC41IDI3IDEwLjUgOC41aDgzMnEzIDAgMTAuNS04LjV0MTQuNS0yNyA3LTQwLjV6bS02NzItMTA3Nmg0NDhsLTQ4LTExN3EtNy05LTE3LTExaC0zMTdxLTEwIDItMTcgMTF6bTkyOCAzMnY2NHEwIDE0LTkgMjN0LTIzIDloLTk2djk0OHEwIDgzLTQ3IDE0My41dC0xMTMgNjAuNWgtODMycS02NiAwLTExMy01OC41dC00Ny0xNDEuNXYtOTUyaC05NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgzMDlsNzAtMTY3cTE1LTM3IDU0LTYzdDc5LTI2aDMyMHE0MCAwIDc5IDI2dDU0IDYzbDcwIDE2N2gzMDlxMTQgMCAyMyA5dDkgMjN6IiBzdHlsZT0iJiMxMDsgICAgZmlsbDogIzQwM2MzYzsmIzEwOyIvPjwvc3ZnPg==')
					}

					.icon-trash:hover, .icon-trash:focus, .icon-trash:active {
						cursor: pointer;
						background: transparent;
						outline: 0;
					}

				`}
			</style>
		</div>
	);
};

GradientPicker.propTypes = GRADIENT_PICKER_PROP_TYPES;

export default GradientPicker;