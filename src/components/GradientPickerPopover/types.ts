import { PaletteColor } from '../GradientPicker/types';
import { GradientType } from '../GradientTypePicker/types';

export interface GradientPickerPopoverProps {
  palette: PaletteColor[];
  open?: boolean;
  setOpen: (open: boolean) => void;
  trigger?: (background: string, togglePicker: () => void) => React.ReactElement;
  showAnglePicker?: boolean;
  showGradientTypePicker?: boolean;
  angle?: number;
  setAngle?: (angle: number) => void;
  gradientType?: GradientType;
  setGradientType?: (type: GradientType) => void;
  [key: string]: any; // For other GradientPicker props
} 