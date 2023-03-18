import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS_CONFIG } from "../constants";

const getSlidesToShow = (width: number): number => {
  const config = BREAKPOINTS_CONFIG.find((item) => width > item.breakpoint);
  return config ? config.slidesToShow : 1;
};

export const useResponsiveCarousel = (): number => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(() => getSlidesToShow(windowWidth));

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setSlidesToShow(getSlidesToShow(windowWidth));
  }, [windowWidth]);

  return slidesToShow;
};
