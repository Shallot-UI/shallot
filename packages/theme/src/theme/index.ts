import { ThemeOptions, ThemeVariants } from '../types'

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
 * - gridUnit: a number representing the grid unit for the theme.
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

export const makeTheme = <T extends ThemeOptions, V extends ThemeVariants>(
  options: T,
  themeVariants?: V,
) => {
  const breakpoints = {
    ...options?.breakpoints,
  } as ThemeOptions['breakpoints'] & T['breakpoints']

  const colors = {
    ...DEFAULT_COLORS,
    ...options?.colors,
  } as typeof DEFAULT_COLORS & T['colors']

  const fontFamilies = {
    ...DEFAULT_FONT_FAMILIES,
    ...options?.fontFamilies,
  } as typeof DEFAULT_FONT_FAMILIES & T['fontFamilies']

  const fontSizes = {
    ...DEFAULT_FONT_SIZES,
    ...options?.fontSizes,
  } as typeof DEFAULT_FONT_SIZES & T['fontSizes']

  const gridUnit = options?.gridUnit ?? 12

  const letterSpacings = {
    ...DEFAULT_LETTER_SPACINGS,
    ...options?.letterSpacings,
  } as typeof DEFAULT_LETTER_SPACINGS & T['letterSpacings']

  const lineHeights = {
    ...DEFAULT_LINE_HEIGHTS,
    ...options?.lineHeights,
  } as typeof DEFAULT_LINE_HEIGHTS & T['lineHeights']

  const radii = {
    ...DEFAULT_RADII,
    ...options?.radii,
  } as typeof DEFAULT_RADII & T['radii']

  const shadows = {
    ...DEFAULT_SHADOWS,
    ...options?.shadows,
  } as typeof DEFAULT_SHADOWS & T['shadows']

  const variants = {
    ...themeVariants,
  } as V

  return {
    breakpoints,
    colors,
    fontFamilies,
    fontSizes,
    gridUnit,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    variants,
  }
}

export const DEFAULT_THEME = makeTheme({})

export type Theme = typeof DEFAULT_THEME
