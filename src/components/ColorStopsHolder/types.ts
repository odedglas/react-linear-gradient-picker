import { Stop, Limits } from '../ColorStop/types';
import { DIRECTIONS } from '../GradientPicker/constants';

export interface ColorStopsHolderProps {
  width: number;
  direction: typeof DIRECTIONS[keyof typeof DIRECTIONS];
  stops: Stop[];
  disabled?: boolean;
  limits: Limits;
  onPosChange: (data: { id: number; offset: number }) => void;
  onAddColor: (data: { offset: number }) => void;
  onDeleteColor: (id: number) => void;
  onDragStart?: (id: number) => void;
  onDragEnd?: (id: number) => void;
}

export interface StopsHolderStyle {
  width: number;
  height: number;
  position: 'relative';
  cursor: 'default' | 'crosshair';
} 