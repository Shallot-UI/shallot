import { ThemeGetter } from '@shallot-ui/core'
import { FontSizeProps } from '@shallot-ui/theme'

const getStaticFontSize: ThemeGetter<FontSizeProps> = ({ fontSize, theme }) =>
  fontSize && typeof theme?.fontSizes?.[fontSize] === 'number'
    ? `font-size: ${theme?.fontSizes?.[fontSize]}px;`
    : undefined

export default getStaticFontSize
