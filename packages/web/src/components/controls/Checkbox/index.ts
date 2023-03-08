import { withStyleProps } from '../../../utils'
import { StatefulCheckbox } from './Components'
import { getCheckboxStyles } from './getStyles'

export * from './Components'
export * from './getStyles'
export * from './types'

export const Checkbox = withStyleProps(StatefulCheckbox, getCheckboxStyles)
