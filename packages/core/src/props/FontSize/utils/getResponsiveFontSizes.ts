import { FontSizeProps } from '@shallot-ui/theme'

import { Getter } from '../../../types'
import { getMediaQueries } from '../../../utils'
import getStaticFontSize from './getStaticFontSize'

const getResponsiveFontSizes: Getter<FontSizeProps> = ({ fontSize }) =>
  fontSize
    ? ({ theme }) => {
        // The default font size will come from the theme's `fontSizes` object.
        // It will be overridden by any `fontSizes` modifiers defined in the theme's
        // `breakpoints` configuration.
        const baseStyle = getStaticFontSize({ fontSize, theme })

        // Loop through the breakpoints and add any modifiers to the font sizes.
        // e.g., breakpoints: { 960: { fontSizes: { md: 16 }}}
        const mediaQueries = getMediaQueries(theme, (subtheme) =>
          getStaticFontSize({ fontSize, theme: subtheme }),
        )

        return [baseStyle, mediaQueries].join('')
      }
    : ''

export default getResponsiveFontSizes
