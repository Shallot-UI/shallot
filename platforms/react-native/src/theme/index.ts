import {
  ThemeGlobals,
  ThemeTokens,
  ThemeVariants,
} from '@shallot-ui/core-theme'

import { makeNativeThemeTokens } from './tokens'
import { makeNativeThemeGlobals } from './globals'
import { makeNativeThemeVariants } from './variants'

export * from './globals'
export * from './tokens'
export * from './variants'

export const makeNativeTheme = ({
  tokens = {},
  variants = {},
  globals = {},
}: {
  tokens?: ThemeTokens
  variants?: ThemeVariants
  globals?: ThemeGlobals
} = {}) => ({
  mode: 'default',
  tokens: makeNativeThemeTokens(tokens),
  globals: makeNativeThemeGlobals(globals),
  variants: makeNativeThemeVariants(variants),
})

export const DEFAULT_NATIVE_THEME = makeNativeTheme()
