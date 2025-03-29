import { Point } from '../../types';

/**
 * Returns a DOM element center offset
 * @param el - The DOM element to get the center offset for
 * @returns The center point coordinates
 */
const centerOffset = (el: HTMLElement | null): Point => {
  if (!el) return { y: 0, x: 0 };

  const { top, left, height, width } = el.getBoundingClientRect();

  return {
    y: top + height / 2,
    x: left + width / 2,
  };
};

export default centerOffset;
