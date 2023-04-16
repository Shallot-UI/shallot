import { withStyleProps } from '../../../utils'
import { StatefulCheckbox } from './Components'
import { getCheckboxStyles } from './getStyles'
import { CheckboxProps, CheckboxStyleProps } from './types'

export * from './Components'
export * from './getStyles'
export * from './types'

export const Checkbox = withStyleProps<CheckboxStyleProps, CheckboxProps>(
  StatefulCheckbox,
  getCheckboxStyles,
)
