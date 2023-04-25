import { Getter } from '@shallot-ui/core'
import { LineHeightProps } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components/native'

import getStaticLineHeight from './getStaticLineHeight'
import { getMediaQueries } from '../../../utils/getMediaQueries'

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
        const mediaQueries = getMediaQueries(theme, (subtheme) =>
          getStaticLineHeight({
            fontSize,
            lineHeight,
            theme: subtheme as DefaultTheme,
          }),
        )

        return [baseStyle, mediaQueries].join('')
      }
    : ''

export default getResponsiveLineHeights