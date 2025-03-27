import { useState } from 'react';

import { DIRECTIONS } from '../../GradientPicker/constants';
import useDragging from '../../hooks/useDragging';

/**
 * Limits a client drag movement within given min / max
 * @param {Number} offset - The current clientX
 * @param {Number} min - Min boundary
 * @param {Number} max - Max boundary
 * @returns {Number}
 */
const limitPos = (offset, min, max) => Math.max(Math.min(offset, max), min);

const getColorStopRefCoordinate = (ref, direction) => {
  if (!ref.current) return 0;
  const rect = ref.current.getBoundingClientRect();

  return direction === DIRECTIONS.HORIZONTAL ? rect.top : rect.left;
};

const getDeleteDistanceFromColorStopToCoordinate = (direction, coordinates, colorStopRef) => {
  const start = direction === DIRECTIONS.HORIZONTAL ? coordinates.clientY : coordinates.clientX;
  const end = getColorStopRefCoordinate(colorStopRef, direction);

  return Math.abs(start - end);
};

const useStopDragging = ({ limits, stop, initialPos, colorStopRef, onPosChange, onDragStart, onDragEnd, onDeleteColor, direction }) => {
  const [posStart, setPosStart] = useState(initialPos);

  const handleDrag = coordinates => {
    const { id, offset } = stop;
    const { min, max } = limits;
    const dragOffset = offset - posStart;

    if (getDeleteDistanceFromColorStopToCoordinate(direction, coordinates, colorStopRef) > limits.drop) {
      return onDeleteColor(id);
    }
    // Limit movements
    const clientCoordinate = direction === DIRECTIONS.HORIZONTAL ? coordinates.clientX : coordinates.clientY;
    const limitedPos = limitPos(dragOffset + clientCoordinate, min, max);

    onPosChange({ id, offset: limitedPos });
  };

  const [drag] = useDragging({
    onDragStart: ({ clientX, clientY }) => {
      setPosStart(direction === DIRECTIONS.HORIZONTAL ? clientX : clientY);

      onDragStart(stop.id);
    },
    onDrag: handleDrag,
    onDragEnd: () => onDragEnd(stop.id),
  });

  return [drag];
};

export default useStopDragging;
