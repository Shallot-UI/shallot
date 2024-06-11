import { makeTheme } from '@shallot-ui/core-theme'
import reactThemeVariants from './variants'
import reactThemeGlobals from './globals'

export { reactThemeVariants, reactThemeGlobals }
export const DEFAULT_REACT_THEME = makeTheme(
  {},
  reactThemeVariants,
  reactThemeGlobals,
)
