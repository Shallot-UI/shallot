import { LineHeightProps } from '@shallot-ui/theme'

import { Getter } from '../../../types'
import { getMediaQueries } from '../../../utils'
import getStaticLineHeight from './getStaticLineHeight'

const getResponsiveLineHeights: Getter<LineHeightProps> = ({
  fontSize,
  lineHeight,
}) =>
  fontSize
    ? ({ theme }) => {
        // The default font size will come from the theme's `fontSizes` object.
        // It will be overridden by any `fontSizes` modifiers defined in the theme's
        // `breakpoints` configuration.
        const baseStyle = getStaticLineHeight({ fontSize, lineHeight, theme })

        // Loop through the breakpoints and add any modifiers to the font sizes.
        // e.g., breakpoints: { 960: { fontSizes: { md: 16 }}}
        const mediaQueries = getMediaQueries(
          (subtheme) =>
            getStaticLineHeight({ fontSize, lineHeight, theme: subtheme }),
          theme?.breakpoints,
        )

        return [baseStyle, mediaQueries].join('')
      }
    : ''

export default getResponsiveLineHeights
