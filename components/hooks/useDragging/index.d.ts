import { default as React } from 'react';
import { DragEventType } from './constants';
export type ReactDragEvent = React.MouseEvent | React.TouchEvent;
interface Coordinates {
    clientX: number;
    clientY: number;
}
interface DragHandler<Event = ReactDragEvent> {
    stop: (e: Event) => void;
    coordinates: (e: Event) => Coordinates;
    dragEvent: {
        name: DragEventType;
        options?: AddEventListenerOptions;
    };
    dragEndEvent: {
        name: DragEventType;
        options?: AddEventListenerOptions;
    };
}
interface UseDraggingProps {
    onDragStart?: (coords: Coordinates) => void;
    onDrag?: (coords: Coordinates) => void;
    onDragEnd?: (change: Coordinates | undefined) => void;
}
declare const useDragging: ({ onDragStart, onDrag, onDragEnd }: UseDraggingProps) => readonly [(e: ReactDragEvent) => void, (e: ReactDragEvent, handler: DragHandler) => void, () => void];
export default useDragging;
