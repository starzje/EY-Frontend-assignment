import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS_CONFIG } from "../constants";

/**
 * A custom React hook that provides the number of slides to show in a responsive carousel.
 * The hook calculates the number of slides based on the window width and the provided breakpoints configuration.
 * @module useResponsiveCarousel
 * @returns {number} - The number of slides to show in the carousel based on the current window width.
 * @returns
 */

const getSlidesToShow = (width: number): number => {
  const config = BREAKPOINTS_CONFIG.find((item) => width > item.breakpoint); // Find the first breakpoint that is greater than the current window width.
  return config ? config.slidesToShow : 1; // If no breakpoint is found, return 1.
};

export const useResponsiveCarousel = (): number => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(() => getSlidesToShow(windowWidth));

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth); // Update the window width state variable on window resize.
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Add a window resize event listener.

    return () => {
      window.removeEventListener("resize", handleResize); // Remove the window resize event listener on unmount.
    };
  }, [handleResize]);

  useEffect(() => {
    setSlidesToShow(getSlidesToShow(windowWidth)); // Update the number of slides to show based on the current window width.
  }, [windowWidth]);

  return slidesToShow;
};
