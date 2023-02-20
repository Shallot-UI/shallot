import { RadiusProps } from '@shallot-ui/theme'
import { ThemeGetter } from '../../../types'

const getStaticRadius: ThemeGetter<RadiusProps> = ({ radius, theme }) =>
  radius && typeof theme?.radii?.[radius] === 'number'
    ? `border-radius: ${theme?.radii?.[radius]}px;`
    : undefined

export default getStaticRadius
