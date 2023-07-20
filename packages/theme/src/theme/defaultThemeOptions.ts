import { DEFAULT_BREAKPOINTS } from './breakpoints'
import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_TYPEFACES } from './typefaces'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_THEME_DEFAULTS } from './defaults'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_ELEVATIONS } from './elevations'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'
import { DEFAULT_GRID_UNITS } from './gridUnits'
import { DEFAULT_VARIANTS } from './variants'

const DEFAULT_THEME_OPTIONS = {
  defaults: DEFAULT_THEME_DEFAULTS,
  breakpoints: DEFAULT_BREAKPOINTS,
  gridUnits: DEFAULT_GRID_UNITS,
  typefaces: DEFAULT_TYPEFACES,
  colors: DEFAULT_COLORS,
  fontSizes: DEFAULT_FONT_SIZES,
  lineHeights: DEFAULT_LINE_HEIGHTS,
  radii: DEFAULT_RADII,
  elevations: DEFAULT_ELEVATIONS,
  letterSpacings: DEFAULT_LETTER_SPACINGS,
  variants: DEFAULT_VARIANTS,
} as const

export default DEFAULT_THEME_OPTIONS
