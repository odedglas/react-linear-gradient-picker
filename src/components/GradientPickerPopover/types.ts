import { GradientType } from '../../types';
import { PaletteColor } from '../GradientPicker/types';

export interface GradientPickerPopoverProps {
  palette: Omit<PaletteColor, 'id'>[];
  onPaletteChange: (palette: Omit<PaletteColor, 'id'>[]) => void;
  open?: boolean;
  setOpen: (open: boolean) => void;
  trigger?: (background: string, togglePicker: () => void) => React.ReactElement;
  showAnglePicker?: boolean;
  showGradientTypePicker?: boolean;
  angle?: number;
  setAngle?: (angle: number) => void;
  gradientType?: GradientType;
  setGradientType?: (type: GradientType) => void;
}
