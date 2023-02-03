import { DefaultTheme } from 'styled-components'
import { FontSizeProps } from '@shallot-ui/theme'

export const getFontSize =
  ({ fontSize = 'md' }: FontSizeProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const { fontSizes, breakpoints } = theme
    const size = fontSizes[fontSize]

    // The default font size will come from the theme's `fontSizes` object.
    // It will be overridden by any `fontSizes` modifiers defined in the theme's
    // `breakpoints` configuration.
    let style = `font-size: ${size}px;`

    // Loop through the breakpoints and add any modifiers to the font sizes.
    // e.g., breakpoints: { 960: { fontSizes: { md: 16 }}}
    Object.entries(breakpoints).map(([width, modifiers]) => {
      const sizeModifier = modifiers.fontSizes?.[fontSize]
      if (sizeModifier) {
        style += `@media (min-width: ${width}px) {
          font-size: ${sizeModifier}px;
        }`
      }
    })

    return style
  }
