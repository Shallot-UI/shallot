import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
} from '@shallot-ui/core-theme'

import { makeReactEmailThemeTokens } from './tokens'
import { makeReactEmailThemeGlobals } from './globals'
import { makeReactEmailThemeVariants } from './variants'

export * from './globals'
export * from './tokens'
export * from './variants'

export const makeReactEmailTheme = ({
  tokens = {},
  variants = {},
  globals = {},
}: {
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
} = {}) => ({
  mode: 'default',
  tokens: makeReactEmailThemeTokens(tokens),
  globals: makeReactEmailThemeGlobals(globals),
  variants: makeReactEmailThemeVariants(variants),
})

export const DEFAULT_REACT_THEME = makeReactEmailTheme()
