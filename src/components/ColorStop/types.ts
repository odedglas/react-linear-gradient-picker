import { RefObject } from 'react';
import { ColorStop, Limits, DragCoordinates } from '../../types';
import { DIRECTIONS } from '../GradientPicker/constants';

export type { DragCoordinates };

export interface ColorStopProps {
  stop: ColorStop;
  limits: Limits;
  onPosChange: (data: { id: number; offset: number }) => void;
  onDeleteColor: (id: number) => void;
  onDragStart?: (id: number) => void;
  onDragEnd?: (id: number) => void;
  direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
}

export interface UseStopDraggingProps {
  stop: ColorStop;
  limits: Limits;
  initialPos?: number;
  colorStopRef: RefObject<HTMLDivElement | null>;
  onPosChange: (data: { id: number; offset: number }) => void;
  onDragStart: (id: number) => void;
  onDragEnd: (id: number) => void;
  onDeleteColor: (id: number) => void;
  direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
}
