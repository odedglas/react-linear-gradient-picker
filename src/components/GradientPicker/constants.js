import { COLOR_STOP_HOLDER_CLASSNAME } from '../ColorStopsHolder/constants';

const STOP_WIDTH = 10;

export const HALF_STOP_WIDTH = STOP_WIDTH / 2;

export const DEFAULT_STOP_REMOVAL_DROP = 50;

export const DEFAULT_WIDTH = 220;

export const DEFAULT_HEIGHT = 32;

export const DEFAULT_MAX_STOPS = 5;

export const DEFAULT_MIN_STOPS = 2;

export const DIRECTIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

export const DEFAULT_DIRECTION = DIRECTIONS.HORIZONTAL;

export const GRADIENT_PICKER_CLASSNAME = 'gp';

export const COLOR_PICKER_CLASSNAME = 'color-picker';

export const IGNORED_CLICK_OUTSIDE_SELECTORS = [`.${COLOR_PICKER_CLASSNAME}`, `.${GRADIENT_PICKER_CLASSNAME} .${COLOR_STOP_HOLDER_CLASSNAME}`];

export const COLOR_PICKER_MODS = {
  STATIC: 'static',
  POPOVER: 'popover',
};

export const DEFAULT_COLOR_PICKER_MOD = COLOR_PICKER_MODS.STATIC;