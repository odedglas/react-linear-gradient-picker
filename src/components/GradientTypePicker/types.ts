import { GradientType } from '../../types';

export interface GradientTypePickerProps {
  gradientType: GradientType;
  onGradientTypeChange: (type: GradientType) => void;
}
