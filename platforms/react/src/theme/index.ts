import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
} from '@shallot-ui/core-theme'

import { makeReactThemeTokens } from './tokens'
import { makeReactThemeGlobals } from './globals'
import { makeReactThemeVariants } from './variants'

export * from './globals'
export * from './tokens'
export * from './variants'

export const makeReactTheme = ({
  tokens = {},
  variants = {},
  globals = {},
}: {
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
} = {}) => ({
  mode: 'default',
  tokens: makeReactThemeTokens(tokens),
  globals: makeReactThemeGlobals(globals),
  variants: makeReactThemeVariants(variants),
})

export const DEFAULT_REACT_THEME = makeReactTheme()
