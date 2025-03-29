export interface Limits {
  min: number;
  max: number;
  drop?: number;
}

export type NoopFunction = () => void;

export interface DragCoordinates {
  clientX: number;
  clientY: number;
}
