import { RadiusProps } from '@shallot-ui/theme'

import { Getter } from '../../../types'
import { getMediaQueries } from '../../../utils'
import getStaticRadius from './getStaticRadius'

const getResponsiveRadii: Getter<RadiusProps> = ({ radius }) =>
  radius
    ? ({ theme }) => {
        // The default font size will come from the theme's `radii` object.
        // It will be overridden by any `radii` modifiers defined in the theme's
        // `breakpoints` configuration.
        const baseStyle = getStaticRadius({ radius, theme })

        // Loop through the breakpoints and add any modifiers to the font sizes.
        // e.g., breakpoints: { 960: { radii: { md: 16 }}}
        const mediaQueries = getMediaQueries(theme, (subtheme) =>
          getStaticRadius({ radius, theme: subtheme }),
        )

        return [baseStyle, mediaQueries].join('')
      }
    : ''

export default getResponsiveRadii
