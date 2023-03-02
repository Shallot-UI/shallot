import { DefaultTheme } from 'styled-components'
import { ThemeGetterValue } from '../../types'

export const getMediaQueries = (
  getStyle: (
    theme: DefaultTheme['breakpoints'][keyof DefaultTheme['breakpoints']],
  ) => ThemeGetterValue,
  breakpoints: DefaultTheme['breakpoints'],
): string =>
  Object.entries(breakpoints)
    .map(([width, subtheme]) => {
      const style = getStyle(subtheme)
      if (style) return `@media (min-width: ${width}px) { ${style} }`
    })
    .flatMap((value) => (value ? [value] : []))
    .join('')
