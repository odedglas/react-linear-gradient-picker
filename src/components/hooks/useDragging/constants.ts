/**
 * The drag supported events
 */
export const EVENTS = {
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEUP: 'mouseup',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
} as const;

export type DragEventType = (typeof EVENTS)[keyof typeof EVENTS];
