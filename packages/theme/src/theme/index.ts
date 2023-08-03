import { ThemeOptions } from '../types'
import { DEFAULT_DARK_COLORS } from './colors'
import DEFAULT_THEME_OPTIONS from './defaultThemeOptions'

export const makeTheme = <T extends ThemeOptions>(options: T) =>
  Object.freeze({
    defaults: {
      fontFamily:
        options?.defaults?.fontFamily ||
        DEFAULT_THEME_OPTIONS.defaults.fontFamily,
    },
    breakpoints: options?.breakpoints || DEFAULT_THEME_OPTIONS.breakpoints,
    gridUnits: options?.gridUnits || DEFAULT_THEME_OPTIONS.gridUnits,
    fontFamilies: options?.fontFamilies || DEFAULT_THEME_OPTIONS.fontFamilies,
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
