import { ThemeTokens, mergeThemeTokens } from '@shallot-ui/core-theme'
import { makeReactThemeTokens } from '@shallot-ui/platform-react'

export const NEXT_THEME_TOKENS = makeReactThemeTokens()

export const makeNextThemeTokens = <T extends Readonly<ThemeTokens>>(
  tokens?: T,
) => mergeThemeTokens(NEXT_THEME_TOKENS, tokens)
