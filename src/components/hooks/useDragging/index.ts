import { useState, useEffect } from 'react';
import { noop } from '../../../lib';
import { EVENTS, DragEventType } from './constants';

export type ReactDragEvent = React.MouseEvent | React.TouchEvent;

interface Coordinates {
  clientX: number;
  clientY: number;
}

interface DragHandler<Event = ReactDragEvent> {
  stop: (e: Event) => void;
  coordinates: (e: Event) => Coordinates;
  dragEvent: { name: DragEventType; options?: AddEventListenerOptions };
  dragEndEvent: { name: DragEventType; options?: AddEventListenerOptions };
}

const DRAG_HANDLERS: Record<string, DragHandler> = {
  MOUSE: {
    stop: (e: ReactDragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
    coordinates: (e: ReactDragEvent) => {
      const { clientX, clientY } = e as React.MouseEvent;
      return { clientX, clientY };
    },
    dragEvent: { name: EVENTS.MOUSEMOVE },
    dragEndEvent: { name: EVENTS.MOUSEUP },
  },
  TOUCH: {
    stop: noop,
    coordinates: (e: ReactDragEvent) => {
      const [touch] = (e as unknown as TouchEvent).touches;
      return { clientX: touch.clientX, clientY: touch.clientY };
    },
    dragEvent: { name: EVENTS.TOUCHMOVE, options: { passive: true } },
    dragEndEvent: { name: EVENTS.TOUCHEND },
  },
};

const isTouch = (e: ReactDragEvent): e is React.TouchEvent => e.type === EVENTS.TOUCHSTART;

interface UseDraggingProps {
  onDragStart?: (coords: Coordinates) => void;
  onDrag?: (coords: Coordinates) => void;
  onDragEnd?: (change: Coordinates | undefined) => void;
}

const useDragging = ({ onDragStart = noop, onDrag = noop, onDragEnd = noop }: UseDraggingProps) => {
  const [context, setContext] = useState<{ handler?: DragHandler; change?: Coordinates }>({});
  const [dragging, setDragging] = useState(false);

  const dragHandler = (e: ReactDragEvent) => {
    const handler = isTouch(e) ? DRAG_HANDLERS.TOUCH : DRAG_HANDLERS.MOUSE;

    handler.stop(e);

    if (!('button' in e) || e.button === 0) activate(e, handler);
  };

  const activate = (e: ReactDragEvent, handler: DragHandler) => {
    setDragging(true);
    setContext({ handler });

    onDragStart(handler.coordinates(e));
  };

  const deactivate = () => {
    setDragging(false);

    onDragEnd(context.change);
    setContext({});
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    const { handler } = context;
    if (!dragging || !handler) return;

    const change = handler.coordinates(e as unknown as ReactDragEvent);
    context.change = change;
    onDrag(change);
  };

  useEffect(() => {
    const { handler } = context;
    if (!handler) return;

    const { dragEvent, dragEndEvent } = handler;

    if (dragging) {
      document.addEventListener(dragEvent.name, handleDrag, dragEvent.options);
      document.addEventListener(dragEndEvent.name, deactivate, dragEndEvent.options);
    }

    return () => {
      document.removeEventListener(dragEvent.name, handleDrag, dragEvent.options);
      document.removeEventListener(dragEndEvent.name, deactivate, dragEndEvent.options);
    };
  }, [dragging]); // eslint-disable-line react-hooks/exhaustive-deps

  return [dragHandler, activate, deactivate] as const;
};

export default useDragging;
