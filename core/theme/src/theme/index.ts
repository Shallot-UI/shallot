import { ThemeGlobals, ThemeModes, ThemeTokens, ThemeVariants } from '../types'

// Defaults
import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_FAMILIES } from './fontFamilies'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_SHADOWS } from './shadows'

export const makeTheme = <T extends ThemeTokens>(
  tokens?: T,
  variants?: ThemeVariants,
  modes?: ThemeModes,
  globals?: ThemeGlobals,
) => {
  const breakpoints = {
    ...tokens?.breakpoints,
  } as ThemeTokens['breakpoints'] & T['breakpoints']

  const colors = {
    ...DEFAULT_COLORS,
    ...tokens?.colors,
  } as typeof DEFAULT_COLORS & T['colors']

  const fontFamilies = {
    ...DEFAULT_FONT_FAMILIES,
    ...tokens?.fontFamilies,
  } as typeof DEFAULT_FONT_FAMILIES & T['fontFamilies']

  const fontSizes = {
    ...DEFAULT_FONT_SIZES,
    ...tokens?.fontSizes,
  } as typeof DEFAULT_FONT_SIZES & T['fontSizes']

  const gridUnit = tokens?.gridUnit ?? 12

  const letterSpacings = {
    ...DEFAULT_LETTER_SPACINGS,
    ...tokens?.letterSpacings,
  } as typeof DEFAULT_LETTER_SPACINGS & T['letterSpacings']

  const lineHeights = {
    ...DEFAULT_LINE_HEIGHTS,
    ...tokens?.lineHeights,
  } as typeof DEFAULT_LINE_HEIGHTS & T['lineHeights']

  const radii = {
    ...DEFAULT_RADII,
    ...tokens?.radii,
  } as typeof DEFAULT_RADII & T['radii']

  const shadows = {
    ...DEFAULT_SHADOWS,
    ...tokens?.shadows,
  } as typeof DEFAULT_SHADOWS & T['shadows']

  return {
    tokens: {
      breakpoints,
      colors,
      fontFamilies,
      fontSizes,
      gridUnit,
      letterSpacings,
      lineHeights,
      radii,
      shadows,
    },
    variants: { ...variants } as ThemeVariants,
    modes: { ...modes } as ThemeModes,
    globals: { ...globals } as ThemeGlobals,
  }
}

export const DEFAULT_THEME = makeTheme()
