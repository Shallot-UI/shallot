import { makeTheme } from '@shallot-ui/core-theme'
import nativeThemeVariants from './variants'
import nativeThemeGlobals from './globals'

export { nativeThemeVariants, nativeThemeGlobals }
export const DEFAULT_NATIVE_THEME = makeTheme(
  {},
  nativeThemeVariants,
  nativeThemeGlobals,
)
export type NativeTheme = typeof DEFAULT_NATIVE_THEME
