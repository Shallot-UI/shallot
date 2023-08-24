import { ThemeOptions } from '../types'
import { DEFAULT_DARK_COLORS } from './colors'
import DEFAULT_THEME_OPTIONS from './defaultThemeOptions'

/**
 * This module exports a function `makeTheme` that creates a theme object based on the provided options.
 * The `makeTheme` function takes an object of type `ThemeOptions` as input and returns a frozen object with the following properties:
 * - defaults: an object containing any default values for the theme.
 * - breakpoints: an object containing the breakpoints for the theme.
 * - gridUnits: a number representing the grid unit for the theme.
 * - fontFamilies: an object containing the font families for the theme.
 * - variants: an object containing the component variants for the theme.
 * - shadows: an object containing the box-shadows for the theme.
 * - colors: an object containing the colors for the theme.
 * - fontSizes: an object containing the font sizes for the theme.
 * - lineHeights: an object containing the line heights for the theme.
 * - radii: an object containing the radii for the theme.
 * - letterSpacings: an object containing the letter spacings for the theme.
 *
 * The `DEFAULT_THEME` and `DEFAULT_DARK_THEME` objects are created using the `makeTheme` function with default options and default dark colors respectively.
 *
 * @param options An object of type `ThemeOptions` containing the options for the theme.
 * @returns A frozen object representing the theme.
 */

export const makeTheme = <T extends ThemeOptions>(options: T) =>
  Object.freeze({
    defaults: {
      fontFamily:
        options?.defaults?.fontFamily ||
        DEFAULT_THEME_OPTIONS.defaults.fontFamily,
    },
    breakpoints: options?.breakpoints || DEFAULT_THEME_OPTIONS.breakpoints,
    gridUnits: options?.gridUnits || DEFAULT_THEME_OPTIONS.gridUnits,
    fontFamilies: {
      ...DEFAULT_THEME_OPTIONS.fontFamilies,
      ...options?.fontFamilies,
    },
    variants: options?.variants || DEFAULT_THEME_OPTIONS.variants,
    shadows: {
      ...DEFAULT_THEME_OPTIONS.shadows,
      ...options?.shadows,
    },
    colors: {
      ...DEFAULT_THEME_OPTIONS.colors,
      ...options?.colors,
    },
    fontSizes: {
      ...DEFAULT_THEME_OPTIONS.fontSizes,
      ...options?.fontSizes,
    },
    lineHeights: {
      ...DEFAULT_THEME_OPTIONS.lineHeights,
      ...options?.lineHeights,
    },
    radii: {
      ...DEFAULT_THEME_OPTIONS.radii,
      ...options?.radii,
    },
    letterSpacings: {
      ...DEFAULT_THEME_OPTIONS.letterSpacings,
      ...options?.letterSpacings,
    },
  })

export const DEFAULT_THEME = makeTheme({})
export const DEFAULT_DARK_THEME = makeTheme({ colors: DEFAULT_DARK_COLORS })
