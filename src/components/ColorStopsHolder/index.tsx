import React from 'react';
import ColorStop from '../ColorStop';
import { DIRECTIONS } from '../GradientPicker/constants';
import { COLOR_STOP_HOLDER_CLASSNAME } from './constants';
import { ColorStopsHolderProps, StopsHolderStyle } from './types';

const getStopsHolderStyle = (width: number, disabled: boolean, direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS]): StopsHolderStyle => ({
  width: direction === DIRECTIONS.HORIZONTAL ? width : 17,
  height: direction === DIRECTIONS.HORIZONTAL ? 17 : width,
  position: 'relative',
  cursor: disabled ? 'default' : 'crosshair',
});

const ColorStopsHolder: React.FC<ColorStopsHolderProps> = ({ width, direction, stops, disabled = false, onAddColor, ...rest }) => {
  const handleColorAdd = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    if (e.button) return;
    const offset = direction === DIRECTIONS.HORIZONTAL ? e.clientX - e.currentTarget.getBoundingClientRect().left : e.clientY - e.currentTarget.getBoundingClientRect().top;

    onAddColor({ offset });
  };

  return (
    <div className={COLOR_STOP_HOLDER_CLASSNAME} style={getStopsHolderStyle(width, disabled, direction)} onMouseDown={handleColorAdd}>
      {stops.map(stop => (
        <ColorStop key={stop.id} stop={stop} direction={direction} {...rest} />
      ))}
    </div>
  );
};

export default ColorStopsHolder;
