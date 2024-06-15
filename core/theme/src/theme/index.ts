import { ThemeGlobals, ThemeTokens, ThemeVariants } from '../types'

import { makeThemeTokens } from './tokens'
import { makeThemeVariants } from './variants'
import { makeThemeGlobals } from './globals'

export * from './globals'
export * from './tokens'
export * from './variants'

export const makeTheme = ({
  tokens = {},
  variants = {},
  globals = {},
}: {
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
} = {}) =>
  ({
    mode: 'default',
    tokens: makeThemeTokens(tokens),
    variants: makeThemeVariants(variants),
    globals: makeThemeGlobals(globals),
  }) as const

export const DEFAULT_THEME = makeTheme()
