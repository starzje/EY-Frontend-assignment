export interface Image {
  id: number;
  url: string;
  description?: string;
}

export interface BreakpointConfig {
  breakpoint: number;
  slidesToShow: number;
}
