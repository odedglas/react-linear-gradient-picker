import { ReactDragEvent } from '../../hooks/useDragging';
import { UseStopDraggingProps } from '../types';
declare const useStopDragging: ({ limits, stop, initialPos, colorStopRef, onPosChange, onDragStart, onDragEnd, onDeleteColor, direction, }: UseStopDraggingProps) => [(e: ReactDragEvent) => void];
export default useStopDragging;
