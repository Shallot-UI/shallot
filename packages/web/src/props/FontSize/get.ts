import { DefaultTheme } from 'styled-components'
import { FontSizeProps } from '@shallot-ui/theme'

import makeResponsiveSize from './utils/makeResponsiveSize'
import makeStaticSize from './utils/makeStaticSize'

export const getFontSize =
  ({ fontSize = 'md' }: FontSizeProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const { fontSizes, breakpoints } = theme
    const size = fontSizes[fontSize] as number | number[]
    return Array.isArray(size)
      ? makeResponsiveSize(size, breakpoints)
      : makeStaticSize(size)
  }
