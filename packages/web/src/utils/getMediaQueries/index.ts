import { ThemeOptions, makeTheme } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'
import { ThemeGetterValue } from '@shallot-ui/core'

export const getMediaQueries = (
  theme: DefaultTheme,
  getStyle: (theme: DefaultTheme) => ThemeGetterValue,
): string =>
  theme.breakpoints
    ? Object.entries(theme.breakpoints)
        .map(([width, subtheme]) => {
          const style = getStyle(makeTheme(subtheme as ThemeOptions))
          if (style) return `@media (min-width: ${width}px) { ${style} }`
        })
        .flatMap((value) => (value ? [value] : []))
        .join('')
    : ''
