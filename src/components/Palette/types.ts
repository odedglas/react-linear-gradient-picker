import { ColorStop } from '../../lib/types';
import { DIRECTIONS } from '../GradientPicker/constants';

export interface PaletteProps {
  palette: ColorStop[];
  width: number;
  height: number;
  direction: typeof DIRECTIONS[keyof typeof DIRECTIONS];
}

export interface LinearGradientProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
} 