import { DefaultTheme } from 'styled-components'
import { LineHeightProps } from '@shallot-ui/theme'

import makeResponsiveLineHeight from './utils/makeResponsiveLineHeight'
import makeStaticLineHeight from './utils/makeStaticLineHeight'

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
    const size = fontSizes[fontSize] as number | number[]
    return Array.isArray(size)
      ? makeResponsiveLineHeight(size, ratio, gridUnits, breakpoints)
      : makeStaticLineHeight(size, ratio, gridUnits)
  }
