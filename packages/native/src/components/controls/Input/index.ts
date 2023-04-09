import { withStyleProps } from '../../../utils'
import { StatefulInput } from './Components'
import { getInputStyles } from './getStyles'

export * from './Components'
export * from './getStyles'
export * from './types'

export const Input = withStyleProps(StatefulInput, getInputStyles)
