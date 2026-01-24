/**
 * The drag supported events
 */
export declare const EVENTS: {
    readonly MOUSEDOWN: "mousedown";
    readonly MOUSEMOVE: "mousemove";
    readonly MOUSEUP: "mouseup";
    readonly TOUCHSTART: "touchstart";
    readonly TOUCHMOVE: "touchmove";
    readonly TOUCHEND: "touchend";
};
export type DragEventType = (typeof EVENTS)[keyof typeof EVENTS];
