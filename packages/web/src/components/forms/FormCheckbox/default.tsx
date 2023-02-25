import { FunctionComponent } from 'react'

import { BaseFormCheckbox } from './base'
import { FormCheckboxProps } from './types'
// import { formCheckboxStyles } from './styles'

export const FormCheckbox: FunctionComponent<FormCheckboxProps> = (props) => (
  <BaseFormCheckbox
    fullWidth
    // styles={formCheckboxStyles}
    {...props}
  />
)
