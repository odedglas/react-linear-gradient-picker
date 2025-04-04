import React, { useState, useRef, useEffect } from 'react';
import { noop } from '../../lib';
import { DIRECTIONS } from '../GradientPicker/constants';
import useStopDragging from './hooks/useStopDragging';
import { ColorStopProps } from './types';
import './index.scss';

const ColorStop: React.FC<ColorStopProps> = ({ stop, limits, onPosChange, onDeleteColor, onDragStart = noop, onDragEnd = noop, direction }) => {
  const colorStopRef = useRef<HTMLDivElement>(null);
  const [allowRemoveOnDoubleClick, setAllowRemoveOnDoubleClick] = useState(false);
  const [drag] = useStopDragging({
    stop,
    limits,
    onPosChange,
    onDragStart,
    onDragEnd,
    onDeleteColor,
    colorStopRef,
    direction,
  });

  useEffect(() => {
    setTimeout(() => setAllowRemoveOnDoubleClick(true), 500);
  }, []);

  const { offset, color, isActive, opacity, id } = stop;

  return (
    <div
      className={`cs ${direction} ${isActive ? 'active' : ''}`}
      ref={colorStopRef}
      style={direction === DIRECTIONS.HORIZONTAL ? { left: offset } : { top: offset }}
      onMouseDown={drag}
      onDoubleClick={() => {
        if (allowRemoveOnDoubleClick && id !== undefined) {
          onDeleteColor(id);
        }
      }}
      onTouchStart={drag}
    >
      <div style={{ backgroundColor: color, opacity }} />
    </div>
  );
};

export default ColorStop;
