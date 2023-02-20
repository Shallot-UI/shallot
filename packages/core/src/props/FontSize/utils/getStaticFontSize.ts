import { FontSizeProps } from '@shallot-ui/theme'
import { ThemeGetter } from '../../../types'

const getStaticFontSize: ThemeGetter<FontSizeProps> = ({ fontSize, theme }) =>
  fontSize && typeof theme?.fontSizes?.[fontSize] === 'number'
    ? `font-size: ${theme?.fontSizes?.[fontSize]}px;`
    : undefined

export default getStaticFontSize
