import { CSSObject, DefaultTheme } from 'styled-components'

export const getMediaQueries = (
  getStyle: (theme: DefaultTheme) => string | false | undefined | CSSObject,
  breakpoints: DefaultTheme['breakpoints'],
): string =>
  Object.entries(breakpoints)
    .map(([width, subtheme]) => {
      const style = getStyle(subtheme)
      if (style) return `@media (min-width: ${width}px) { ${style} }`
    })
    .flatMap((value) => (value ? [value] : []))
    .join('')
