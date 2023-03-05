import { FunctionComponent } from 'react'

import { FormControlColumnProps } from '../types'
import { DisplayFormControlColumn } from './display'

export const BaseFormControlColumn: FunctionComponent<
  FormControlColumnProps
> = ({
  errorText,
  helperText,
  label,
  required,
  disabled,
  focused,
  populated,
  error,
  children,
  getStyles,
}) => (
  <DisplayFormControlColumn
    errorText={errorText}
    helperText={helperText}
    label={label}
    required={required}
    styles={getStyles({ disabled, focused, populated, error })}
  >
    {children}
  </DisplayFormControlColumn>
)
