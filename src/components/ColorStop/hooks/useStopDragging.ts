import { useState } from 'react';
import { DIRECTIONS } from '../../GradientPicker/constants';
import useDragging, { ReactDragEvent } from '../../hooks/useDragging';
import { UseStopDraggingProps, DragCoordinates } from '../types';

/**
 * Limits a client drag movement within given min / max
 * @param offset - The current clientX
 * @param min - Min boundary
 * @param max - Max boundary
 * @returns Limited position
 */
const limitPos = (offset: number, min: number, max: number): number => Math.max(Math.min(offset, max), min);

const getColorStopRefCoordinate = (ref: React.RefObject<HTMLDivElement | null>, direction: typeof DIRECTIONS[keyof typeof DIRECTIONS]): number => {
  if (!ref.current) return 0;
  const rect = ref.current.getBoundingClientRect();

  return direction === DIRECTIONS.HORIZONTAL ? rect.top : rect.left;
};

const getDeleteDistanceFromColorStopToCoordinate = (
  direction: typeof DIRECTIONS[keyof typeof DIRECTIONS],
  coordinates: DragCoordinates,
  colorStopRef: React.RefObject<HTMLDivElement | null>
): number => {
  const start = direction === DIRECTIONS.HORIZONTAL ? coordinates.clientY : coordinates.clientX;
  const end = getColorStopRefCoordinate(colorStopRef, direction);

  return Math.abs(start - end);
};

const useStopDragging = ({
  limits,
  stop,
  initialPos,
  colorStopRef,
  onPosChange,
  onDragStart,
  onDragEnd,
  onDeleteColor,
  direction,
}: UseStopDraggingProps): [(e: ReactDragEvent) => void] => {
  const [posStart, setPosStart] = useState(initialPos || 0);

  const handleDrag = (coordinates: DragCoordinates): void => {
    const { id, offset } = stop;
    const { min, max } = limits;
    const dragOffset = offset - posStart;

    if (getDeleteDistanceFromColorStopToCoordinate(direction, coordinates, colorStopRef) > (limits.drop || 0)) {
      return onDeleteColor(id);
    }
    // Limit movements
    const clientCoordinate = direction === DIRECTIONS.HORIZONTAL ? coordinates.clientX : coordinates.clientY;
    const limitedPos = limitPos(dragOffset + clientCoordinate, min, max);

    onPosChange({ id, offset: limitedPos });
  };

  const [drag] = useDragging({
    onDragStart: ({ clientX, clientY }: DragCoordinates) => {
      setPosStart(direction === DIRECTIONS.HORIZONTAL ? clientX : clientY);
      onDragStart(stop.id);
    },
    onDrag: handleDrag,
    onDragEnd: () => onDragEnd(stop.id),
  });

  return [drag];
};

export default useStopDragging; 
