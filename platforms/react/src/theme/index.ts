import { makeTheme } from '@shallot-ui/core-theme'
import reactThemeVariants from './variants'
import reactThemeModes from './modes'
import reactThemeGlobals from './globals'

export { reactThemeVariants, reactThemeModes, reactThemeGlobals }
export const DEFAULT_WEB_THEME = makeTheme(
  {},
  reactThemeVariants,
  reactThemeModes,
  reactThemeGlobals,
)
