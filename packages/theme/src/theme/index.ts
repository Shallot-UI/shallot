import { ThemeOptions } from '../types'

// Defaults
import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_FAMILIES } from './fontFamilies'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_SHADOWS } from './shadows'

/**
 * This module exports a function `makeTheme` that creates a theme object based on the provided options.
 * The `makeTheme` function takes an object of type `ThemeOptions` as input and returns a frozen object with the following properties:
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

export const makeTheme = <T extends ThemeOptions>(options: T) => {
  if (options?.gridUnits?.length) {
    console.warn(
      'The `gridUnits: number[]` option is deprecated. It will be removed in a future release. Please use `gridUnit: number` instead.',
    )
  }
  return Object.freeze({
    breakpoints: { ...options?.breakpoints },
    colors: { ...DEFAULT_COLORS, ...options?.colors },
    fontFamilies: { ...DEFAULT_FONT_FAMILIES, ...options?.fontFamilies },
    fontSizes: { ...DEFAULT_FONT_SIZES, ...options?.fontSizes },
    gridUnit: options?.gridUnit ?? options?.gridUnits?.[0] ?? 12,
    gridUnits: options?.gridUnits || [12],
    letterSpacings: { ...DEFAULT_LETTER_SPACINGS, ...options?.letterSpacings },
    lineHeights: { ...DEFAULT_LINE_HEIGHTS, ...options?.lineHeights },
    radii: { ...DEFAULT_RADII, ...options?.radii },
    shadows: { ...DEFAULT_SHADOWS, ...options?.shadows },
    variants: { ...options?.variants },
  })
}

export const DEFAULT_THEME = makeTheme({})
