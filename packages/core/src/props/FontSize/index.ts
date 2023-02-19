import { DefaultTheme } from 'styled-components'
import { FontSizeProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const makeMediaQueries = (
  fontSize: keyof DefaultTheme['fontSizes'],
  breakpoints: DefaultTheme['breakpoints'],
) =>
  Object.entries(breakpoints)
    .map(([width, modifiers]) => {
      const sizeModifier = modifiers.fontSizes?.[fontSize]
      if (sizeModifier) {
        return `@media (min-width: ${width}px) {
          font-size: ${sizeModifier}px;
        }`
      }
    })
    .flatMap((value) => (value ? [value] : []))
    .join('')

const fontSize: PropConfigs<FontSizeProps> = {
  fontSize: {
    get: ({ fontSize }) =>
      fontSize
        ? ({ theme }) => {
            const { fontSizes, breakpoints } = theme
            const size = fontSizes[fontSize]

            // The default font size will come from the theme's `fontSizes` object.
            // It will be overridden by any `fontSizes` modifiers defined in the theme's
            // `breakpoints` configuration.
            let style = `font-size: ${size}px;`

            // Loop through the breakpoints and add any modifiers to the font sizes.
            // e.g., breakpoints: { 960: { fontSizes: { md: 16 }}}
            style += makeMediaQueries(fontSize, breakpoints)

            return style
          }
        : '',
  },
}

export const pullDisplayProps = makePropPuller(fontSize)
export const getDisplayProps = makePropGetter(fontSize)
