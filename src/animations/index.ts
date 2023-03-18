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
