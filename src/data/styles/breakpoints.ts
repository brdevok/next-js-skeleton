/**
 * Enum representing viewport breakpoints that correspond directly to SASS variables.
 *
 * This enum is intended for scripting purposes and provides access to the same
 * breakpoint values defined in the SASS variables located in `styles/variables/breakpoints.scss`.
 *
 * @enum {string}
 */
export const enum ViewportWidth {
	MinWidth = 375,
	MaxWidth = 1920,
	Width480 = 480,
	Width600 = 600,
	Width1024 = 1024,
	Width1280 = 1280,
	Width1440 = 1440,
	Width1600 = 1600,
}