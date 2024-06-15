import {
  ThemeTokens,
  makeThemeTokens,
  mergeThemeTokens,
} from '@shallot-ui/core-theme'

export const REACT_NATIVE_THEME_TOKENS = makeThemeTokens({})

export const makeNativeThemeTokens = <T extends Readonly<ThemeTokens>>(
  tokens?: T,
) => mergeThemeTokens(REACT_NATIVE_THEME_TOKENS, tokens)
