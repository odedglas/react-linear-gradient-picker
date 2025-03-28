export const GRADIENT_TYPES = {
  LINEAR: 'linear',
  RADIAL: 'radial',
} as const;

export type GradientType = (typeof GRADIENT_TYPES)[keyof typeof GRADIENT_TYPES];

export interface GradientTypePickerProps {
  gradientType: GradientType;
  onGradientTypeChange: (type: GradientType) => void;
}
