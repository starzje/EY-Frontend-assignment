/**
 * Creates a slide-in animation for an element based on the given flexDirection.
 * @param {("flex-row" | "flex-row-reverse")} flexDirection - The flexDirection to determine the initial position of the sliding element.
 * @returns {Object} An animation object for Framer Motion with 'hidden' and 'visible' states.
 */
export const slideInAnimation = (flexDirection: "flex-row" | "flex-row-reverse") => {
  return {
    hidden: {
      opacity: 0,
      x: flexDirection === "flex-row" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 4,
        delay: 0.3,
        type: "spring",
        stiffness: 35,
        damping: 15,
      },
    },
  };
};

/**
 * A fade-in animation for an element, starting with opacity 0 and y-offset of 50 pixels.
 * @type {Object} An animation object for Framer Motion with 'hidden' and 'visible' states.
 */
export const fadeAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

/**
 * A slide-in from bottom animation for an element, starting with opacity 0 and y-offset of 50 pixels.
 * @type {Object} An animation object for Framer Motion with 'hidden' and 'visible' states.
 */
export const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};
