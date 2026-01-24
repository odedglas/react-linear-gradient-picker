import { ColorStop, GradientConfig, GradientPreview, GradientType } from '../../types';
/**
 * Formats into linear gradient background property
 * @param config - The gradient configuration
 * @returns The formatted gradient string
 */
export declare const asBackground: ({ angle, stops, type }: GradientConfig) => string;
/**
 * Returns a given gradient palette and angle a background preview
 * @param palette - The color stops palette
 * @param angle - The gradient angle in degrees
 * @param gradientType - The type of gradient (linear or radial)
 * @returns The formatted gradient string
 */
declare const getGradientPreview: (palette: ColorStop[], angle?: number, gradientType?: GradientType) => GradientPreview;
export default getGradientPreview;
