import { FunctionComponent } from 'react'

import { getFormControlColumnStyles } from './getStyles'
import { FormControlColumnProps } from './types'
import { DisplayFormControlColumn } from './display'

export * from './display'
export * from './getStyles'
export * from './types'

export const FormControlColumn: FunctionComponent<FormControlColumnProps> = ({
  errorText,
  helperText,
  label,
  required,
  disabled,
  focused,
  populated,
  error,
  children,
}) => (
  <DisplayFormControlColumn
    errorText={errorText}
    helperText={helperText}
    label={label}
    required={required}
    styles={getFormControlColumnStyles({
      state: { disabled, focused, populated, error },
    })}
  >
    {children}
  </DisplayFormControlColumn>
)
