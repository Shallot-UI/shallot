import { LineHeightProps } from '@shallot-ui/theme'
import { ThemeGetter } from '../../../types'
import { snapToGrid } from '../../../utils/snapToGrid'

const getStaticLineHeight: ThemeGetter<LineHeightProps> = ({
  fontSize,
  lineHeight,
  theme,
}) => {
  const { fontSizes, lineHeights, gridUnits } = theme
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
  return `line-height: ${snapToGrid(size * ratio, gridUnits)}px;`
}

export default getStaticLineHeight
