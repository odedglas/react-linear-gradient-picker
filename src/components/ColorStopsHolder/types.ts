import { ColorStop, Limits } from '../../types';
import { DIRECTIONS } from '../GradientPicker/constants';

export interface ColorStopsHolderProps {
  width: number;
  direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
  stops: ColorStop[];
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
