import { GradientCoordinates } from './geometry';

export const GRADIENT_TYPES = {
  LINEAR: 'linear',
  RADIAL: 'radial',
} as const;

export type GradientType = (typeof GRADIENT_TYPES)[keyof typeof GRADIENT_TYPES];

export interface GradientConfig {
  angle: number;
  stops: Array<{
    color: string;
    offset: number;
  }>;
  type: GradientType;
}

export interface GradientPreview {
  background: string;
  angle: number;
  gradient: GradientCoordinates;
}
