import { useEffect } from "react";

/**
 * A custom React hook that locks or unlocks the body scroll based on the provided 'lock' value.
 * This hook can be used to disable scrolling on the body element, e.g. when a modal is open.
 * @module useLockBodyScroll
 * @param {boolean} lock - A boolean value indicating whether the body scroll should be locked (true) or unlocked (false).
 */

export const useLockBodyScroll = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lock]);
};
