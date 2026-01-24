export declare const HALF_STOP_WIDTH: number;
export declare const DEFAULT_STOP_REMOVAL_DROP = 50;
export declare const DEFAULT_WIDTH = 220;
export declare const DEFAULT_HEIGHT = 32;
export declare const DEFAULT_MAX_STOPS = 5;
export declare const DEFAULT_MIN_STOPS = 2;
export declare const DIRECTIONS: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type Direction = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
export declare const DEFAULT_DIRECTION: "horizontal";
export declare const GRADIENT_PICKER_CLASSNAME = "gp";
export declare const COLOR_PICKER_CLASSNAME = "color-picker";
export declare const IGNORED_CLICK_OUTSIDE_SELECTORS: string[];
export declare const COLOR_PICKER_MODS: {
    readonly STATIC: "static";
    readonly POPOVER: "popover";
};
export type ColorPickerMode = (typeof COLOR_PICKER_MODS)[keyof typeof COLOR_PICKER_MODS];
export declare const DEFAULT_COLOR_PICKER_MOD: "static";
