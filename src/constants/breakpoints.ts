interface BreakpointConfig {
  breakpoint: number;
  slidesToShow: number;
}

export const BREAKPOINTS_CONFIG: BreakpointConfig[] = [
  { breakpoint: 2200, slidesToShow: 6 },
  { breakpoint: 1600, slidesToShow: 5 },
  { breakpoint: 1400, slidesToShow: 4 },
  { breakpoint: 1024, slidesToShow: 3 },
  { breakpoint: 768, slidesToShow: 2 },
  { breakpoint: 0, slidesToShow: 1 },
];
