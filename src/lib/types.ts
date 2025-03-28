export interface ColorStop {
  id: number;
  color: string;
  offset: string;
  opacity: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface GradientCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type NoopFunction = () => void;
