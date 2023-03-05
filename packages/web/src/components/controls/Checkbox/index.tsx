import { FunctionComponent } from 'react'

import { CheckboxStyleProps, getCheckboxStyles } from './getStyles'
import { CheckboxProps } from './types'
import { BaseCheckbox } from './Base'

export * from './types'

export const Checkbox: FunctionComponent<
  Omit<CheckboxProps, 'getStyles'> & CheckboxStyleProps
> = (props) => (
  <BaseCheckbox
    getStyles={(state) => getCheckboxStyles(state, props)}
    {...props}
  />
)
