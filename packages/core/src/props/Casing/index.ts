import { CasingProps } from '@shallot-ui/theme'
import { getValue } from '../../utils'

export const casing = getValue<CasingProps>('casing', 'textTransform')
