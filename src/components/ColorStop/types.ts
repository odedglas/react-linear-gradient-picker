import { RefObject } from 'react';
import { DIRECTIONS } from '../GradientPicker/constants';

export interface Stop {
  id: number;
  color: string;
  offset: number;
  isActive: boolean;
  opacity?: number;
  pointX?: number;
}

export interface Limits {
  min: number;
  max: number;
  drop?: number;
}

export interface ColorStopProps {
  stop: Stop;
  limits: Limits;
  onPosChange: (data: { id: number; offset: number }) => void;
  onDeleteColor: (id: number) => void;
  onDragStart?: (id: number) => void;
  onDragEnd?: (id: number) => void;
  direction: typeof DIRECTIONS[keyof typeof DIRECTIONS];
}

export interface UseStopDraggingProps {
  stop: Stop;
  limits: Limits;
  initialPos?: number;
  colorStopRef: RefObject<HTMLDivElement | null>;
  onPosChange: (data: { id: number; offset: number }) => void;
  onDragStart: (id: number) => void;
  onDragEnd: (id: number) => void;
  onDeleteColor: (id: number) => void;
  direction: typeof DIRECTIONS[keyof typeof DIRECTIONS];
}

export interface DragCoordinates {
  clientX: number;
  clientY: number;
} 