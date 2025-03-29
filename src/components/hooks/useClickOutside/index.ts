import { useEffect, RefObject } from 'react';

interface UseClickOutsideConfig {
  pickerRef: RefObject<HTMLElement | null>;
  callback: () => void;
  ignoredSelectors: string[];
  enabled: boolean;
}

/**
 * Hook to handle clicks outside of a specified element
 * @param config - Configuration object
 * @param config.pickerRef - Reference to the element to check for clicks outside
 * @param config.callback - Function to call when a click outside is detected
 * @param config.ignoredSelectors - Array of selectors to ignore when checking for clicks outside
 * @param config.enabled - Whether the hook is enabled
 */
export const useClickOutside = ({ pickerRef, callback, ignoredSelectors, enabled }: UseClickOutsideConfig): void => {
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const isInsidePicker = pickerRef.current?.contains(e.target as Node);
      const isIgnoredTarget = ignoredSelectors.some(selector => (e.target as Element).closest(selector));

      if (!isInsidePicker && !isIgnoredTarget) {
        callback();
      }
    }

    if (enabled) {
      document.addEventListener('click', onClickOutside);
    }

    return () => {
      if (enabled) {
        document.removeEventListener('click', onClickOutside);
      }
    };
  }, [callback, ignoredSelectors, enabled, pickerRef]);
};
