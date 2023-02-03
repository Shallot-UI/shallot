import { DefaultTheme } from 'styled-components'
import { LineHeightProps } from '@shallot-ui/theme'

import snapToGrid from './utils/snapToGrid'

export const getLineHeight =
  ({ lineHeight, fontSize }: LineHeightProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const { fontSizes, lineHeights, gridUnits, breakpoints } = theme
    if (!lineHeight) {
      return ''
    }
    if (!fontSize) {
      console.warn('a fontSize is required to calculate line-height')
      return ''
    }

    const ratio = lineHeights[lineHeight]

    // The default font size will come from the theme's `fontSizes` object.
    // It will be overridden by any `fontSizes` modifiers defined in the theme's
    // `breakpoints` configuration.
    const size = fontSizes[fontSize]
    let style = `line-height: ${snapToGrid(size * ratio, gridUnits)}px;`

    // Loop through the breakpoints and add any modifiers to the font sizes.
    // e.g., breakpoints: { 960: { fontSizes: { md: 16 }}}
    Object.entries(breakpoints).map(([width, modifiers]) => {
      const sizeModifier = modifiers.fontSizes?.[fontSize]
      if (sizeModifier) {
        style += `@media (min-width: ${width}px) {
          font-size: ${snapToGrid(sizeModifier * ratio, gridUnits)}px;
        }`
      }
    })
  }
