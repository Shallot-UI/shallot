import { FunctionComponent } from 'react'

import { FormInputStyleProps, getFormInputStyles } from './getStyles'
import { FormInputProps } from './types'
import { BaseFormInput } from './Base'
import { pullRowProps } from '../../containers'

export * from './types'

export const FormInput: FunctionComponent<
  Omit<FormInputProps, 'getStyles'> & FormInputStyleProps
> = (props) => {
  const [rowProps, rest] = pullRowProps(props)

  return (
    <BaseFormInput
      getStyles={(state) => getFormInputStyles(state, rowProps)}
      {...rest}
    />
  )
}
