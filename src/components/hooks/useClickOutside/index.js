import { useEffect } from 'react';

/**
 *
 * @callback useClickOutsideCallback
 */

/**
 *
 * @param {Object} config
 * @param {Object} config.pickerRef several pickers can be present, used to fire the `callback` when a user clicks on another.
 * @param {useClickOutsideCallback} config.callback is called when a user clicks outside `ignoredSelectors` or outside `pickerRef`.
 * @param {[string]} config.ignoredSelectors clicks inside these selectors don't fire the `callback`.
 * @param {boolean} config.enabled determines whether the hook is enabled.
 */
export const useClickOutside = ({ pickerRef, callback, ignoredSelectors, enabled }) => {
  useEffect(() => {
    function onClickOutside(e) {
      const isInsidePicker = pickerRef.current && pickerRef.current.contains(e.target);
      const isIgnoredTarget = ignoredSelectors.some(selector => e.target.closest(selector));

      if (!isInsidePicker || !isIgnoredTarget) {
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
