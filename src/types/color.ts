export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface ColorStop {
  id?: number;
  color: string;
  offset: number;
  opacity?: number;
  isActive?: boolean;
  pointX?: number;
}
