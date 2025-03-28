import { ColorStop } from '../../lib/types';
import { DIRECTIONS, COLOR_PICKER_MODS } from './constants';

export interface PaletteColor {
  id: number;
  offset: string;
  color: string;
  opacity: number;
  active?: boolean;
  isActive?: boolean;
}

export interface GradientPickerProps {
  palette: PaletteColor[];
  paletteHeight?: number;
  width?: number;
  stopRemovalDrop?: number;
  minStops?: number;
  maxStops?: number;
  children?: React.ReactElement;
  flatStyle?: boolean;
  onPaletteChange: (palette: PaletteColor[]) => void;
  onColorStopSelect?: (color: PaletteColor) => void;
  direction?: (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
  colorPickerMode?: (typeof COLOR_PICKER_MODS)[keyof typeof COLOR_PICKER_MODS];
}

export interface PaletteToStopsParams {
  palette: PaletteColor[];
  activeId: number;
  width: number;
}

export interface Limits {
  min: number;
  max: number;
  drop: number;
}

export interface ColorAddParams {
  offset: number;
}

export interface StopPosChangeParams {
  id: number;
  offset: number;
}
