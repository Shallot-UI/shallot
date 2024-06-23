import { ThemeGlobals } from '@/types'
import { mergeThemeGlobals } from '@/utils'

export const DEFAULT_THEME_GLOBALS = {} as const

export const makeThemeGlobals = (tokens?: Readonly<ThemeGlobals>) =>
  mergeThemeGlobals(DEFAULT_THEME_GLOBALS, tokens)
