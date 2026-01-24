import { GradientCoordinates } from './geometry';
export declare const GRADIENT_TYPES: {
    readonly LINEAR: "linear";
    readonly RADIAL: "radial";
};
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
