/**
 * Types and interfaces for image data and responsive carousel breakpoint configuration.
 * @module types
 * @typedef {Object} Image - An object representing an image with an optional description.
 * @property {number} id - The unique identifier of the image.
 * @property {string} url - The URL of the image.
 * @property {string} [description] - An optional description for the image.
 * @typedef {Object} BreakpointConfig - An object representing a breakpoint configuration for a responsive carousel.
 * @property {number} breakpoint - The minimum window width for this breakpoint.
 * @property {number} slidesToShow - The number of slides to show in the carousel for this breakpoint.
 */

export interface Image {
  id: number;
  url: string;
  description?: string;
}

export interface BreakpointConfig {
  breakpoint: number;
  slidesToShow: number;
}
