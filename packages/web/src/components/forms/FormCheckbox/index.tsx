import { FunctionComponent } from 'react'

import { FormCheckboxStyleProps, getFormCheckboxStyles } from './getStyles'
import { FormCheckboxProps } from './types'
import { BaseFormCheckbox } from './Base'

export * from './types'

export const FormCheckbox: FunctionComponent<
  Omit<FormCheckboxProps, 'getStyles'> & FormCheckboxStyleProps
> = (props) => (
  <BaseFormCheckbox
    getStyles={(state) => getFormCheckboxStyles(state, props)}
    {...props}
  />
)
