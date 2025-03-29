import React, { useState, useMemo, useRef, useCallback } from 'react';
import { sortPalette, noop } from '../../lib';
import { ColorStop } from '../../types';
import ColorPicker from '../ColorPicker';
import ColorStopsHolder from '../ColorStopsHolder';
import { useClickOutside } from '../hooks/useClickOutside';
import Palette from '../Palette';
import {
  HALF_STOP_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  DEFAULT_STOP_REMOVAL_DROP,
  DEFAULT_MAX_STOPS,
  DEFAULT_MIN_STOPS,
  DEFAULT_DIRECTION,
  DEFAULT_COLOR_PICKER_MOD,
  GRADIENT_PICKER_CLASSNAME,
  COLOR_PICKER_CLASSNAME,
  IGNORED_CLICK_OUTSIDE_SELECTORS,
  COLOR_PICKER_MODS,
} from './constants';
import { GradientPickerProps, PaletteColor, PaletteToStopsParams, ColorAddParams, StopPosChangeParams } from './types';
import './index.scss';

const nextColorId = (palette: PaletteColor[]): number => {
  const ids = palette.map(({ id }) => id).filter((id): id is number => id !== undefined);
  return ids.length > 0 ? Math.max(...ids) + 1 : 0;
};

const mapIdToPalette = (palette: Omit<PaletteColor, 'id'>[]): PaletteColor[] =>
  palette.map((color, index) => ({
    ...color,
    id: index,
  }));

const mapPaletteToStops = ({ palette, activeId, width }: PaletteToStopsParams): ColorStop[] =>
  palette.map(color => ({
    ...color,
    id: color.id,
    offset: width * Number(color.offset) - HALF_STOP_WIDTH,
    isActive: color.id === activeId,
  }));

const getPaletteColor = (palette: PaletteColor[], id: number | undefined): PaletteColor => {
  const color = id !== undefined ? palette.find(color => color.id === id) : undefined;
  return color || palette[0];
};

const GradientPicker: React.FC<GradientPickerProps> = ({
  palette: initialPalette,
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
  colorPickerMode = DEFAULT_COLOR_PICKER_MOD,
}) => {
  const palette = mapIdToPalette(initialPalette);
  const [showColorPicker, setShowColorPicker] = useState(colorPickerMode === COLOR_PICKER_MODS.STATIC);
  const [defaultActiveColor] = palette;
  const [activeColorId, setActiveColorId] = useState(defaultActiveColor.id);
  const pickerRef = useRef<HTMLDivElement>(null);
  const isPopoverColorPicker = colorPickerMode === COLOR_PICKER_MODS.POPOVER;

  const limits = useMemo(() => {
    const min = -HALF_STOP_WIDTH;
    const max = width - HALF_STOP_WIDTH;
    return { min, max, drop: stopRemovalDrop };
  }, [width, stopRemovalDrop]);

  const closePicker = useCallback(() => setShowColorPicker(false), [setShowColorPicker]);

  useClickOutside({
    pickerRef,
    callback: closePicker,
    ignoredSelectors: IGNORED_CLICK_OUTSIDE_SELECTORS,
    enabled: isPopoverColorPicker,
  });

  const handleColorAdd = ({ offset }: ColorAddParams): void => {
    if (palette.length >= maxStops) return;
    if (isPopoverColorPicker) {
      setShowColorPicker(true);
    }

    const { color } = getPaletteColor(palette, activeColorId);
    const entry: PaletteColor = {
      id: nextColorId(palette),
      offset: offset / width,
      color,
      opacity: 1,
    };

    const updatedPalette = [...palette, entry];
    setActiveColorId(entry.id);
    handlePaletteChange(updatedPalette);
  };

  const handleColorDelete = (id: number): void => {
    if (palette.length <= minStops) return;

    const updatedPalette = palette.filter(c => c.id !== id);
    const activeId = updatedPalette.reduce((a, x) => (Number(x.offset) < Number(a.offset) ? x : a), updatedPalette[0]).id;

    setActiveColorId(activeId);
    handlePaletteChange(updatedPalette);
  };

  const onStopDragStart = (id: number): void => {
    if (isPopoverColorPicker) {
      setShowColorPicker(true);
    }

    if (id !== activeColorId) {
      setActiveColorId(id);
      const color = palette.find(color => color.id === id);
      if (color) {
        onColorStopSelect(color);
      }
    }
  };

  const handleColorSelect = (color: string, opacity = 1): void => {
    const updatedPalette = palette.map(c => (activeColorId === c.id ? { ...c, color, opacity } : c));
    handlePaletteChange(updatedPalette);
  };

  const handlePaletteChange = (palette: PaletteColor[]): void => {
    const sortedPalette = sortPalette(palette).map(({ offset, id, ...rest }) => ({
      ...rest,
      id,
      offset: Number(Number(offset).toFixed(3)),
      active: id === activeColorId,
    }));

    onPaletteChange(sortedPalette as PaletteColor[]);
  };

  const handleStopPosChange = ({ id, offset }: StopPosChangeParams): void => {
    const updatedPalette = palette.map(c => (id === c.id ? { ...c, offset: (offset + HALF_STOP_WIDTH) / width } : c));
    handlePaletteChange(updatedPalette);
  };

  const colorPicker = (): React.ReactElement | null => {
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
    <div ref={pickerRef} data-testid="gradient-picker" className={`${GRADIENT_PICKER_CLASSNAME} color-picker-mode-${colorPickerMode} ${direction}`}>
      <Palette width={paletteWidth} height={paletteHeight} palette={palette} direction={direction} />
      <ColorStopsHolder
        width={paletteWidth}
        disabled={stopsHolderDisabled}
        stops={mapPaletteToStops({
          palette,
          width: paletteWidth,
          activeId: activeColorId || 0,
        })}
        limits={limits}
        onPosChange={handleStopPosChange}
        onAddColor={handleColorAdd}
        onDeleteColor={handleColorDelete}
        onDragStart={onStopDragStart}
        direction={direction}
      />
      <div className="color-picker-wrapper">
        <div className="color-picker-wrapper-inner">{showColorPicker && colorPicker()}</div>
      </div>
    </div>
  );
};

export default GradientPicker;
