import type { DefaultTheme } from 'styled-components'
import type { ThemeGetterValue } from '@shallot-ui/core-utils'
import type { ThemeTokens } from '@shallot-ui/core-theme'

import { makeTheme } from '@shallot-ui/core-theme'

export const getMediaQueries = (
  theme: DefaultTheme,
  getStyle: (theme: DefaultTheme) => ThemeGetterValue,
): string =>
  typeof theme?.tokens?.breakpoints === 'object'
    ? Object.entries(theme.tokens.breakpoints)
        .map(([width, subtheme]) => {
          const style = getStyle(makeTheme(subtheme as ThemeTokens))
          if (style) return `@media (min-width: ${width}px) { ${style} }`
        })
        .filter(Boolean)
        .join('')
    : ''
