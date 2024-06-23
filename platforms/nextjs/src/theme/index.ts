import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
} from '@shallot-ui/core-theme'

import { makeNextThemeTokens } from './tokens'
import { makeNextThemeGlobals } from './globals'
import { makeNextThemeVariants } from './variants'

export * from './globals'
export * from './tokens'
export * from './variants'

export const makeNextTheme = ({
  tokens = {},
  variants = {},
  globals = {},
}: {
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
} = {}) => ({
  mode: 'default',
  tokens: makeNextThemeTokens(tokens),
  globals: makeNextThemeGlobals(globals),
  variants: makeNextThemeVariants(variants),
})

export const DEFAULT_NEXT_THEME = makeNextTheme()
