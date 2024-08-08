import { ThemeTokens } from '@/types'
import { mergeThemeTokens } from '@/utils'

import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_FAMILIES } from './fontFamilies'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_SHADOWS } from './shadows'

export const DEFAULT_THEME_TOKENS = {
  breakpoints: {},
  colors: DEFAULT_COLORS,
  fontFamilies: DEFAULT_FONT_FAMILIES,
  fontSizes: DEFAULT_FONT_SIZES,
  gridUnit: 12,
  letterSpacings: DEFAULT_LETTER_SPACINGS,
  lineHeights: DEFAULT_LINE_HEIGHTS,
  radii: DEFAULT_RADII,
  shadows: DEFAULT_SHADOWS,
} as const

export const makeThemeTokens = (tokens?: Readonly<ThemeTokens>) =>
  mergeThemeTokens(DEFAULT_THEME_TOKENS, tokens)
