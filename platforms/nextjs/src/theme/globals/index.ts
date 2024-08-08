import { ThemeGlobals, mergeThemeGlobals } from '@shallot-ui/core-theme'
import { makeReactThemeGlobals } from '@shallot-ui/platform-react'

export const NEXT_THEME_GLOBALS = makeReactThemeGlobals()

export const makeNextThemeGlobals = <T extends Readonly<ThemeGlobals>>(
  globals?: T,
) => mergeThemeGlobals(NEXT_THEME_GLOBALS, globals)
