import { FunctionComponent } from 'react'

import { FormRowProps } from '../types'
import { StaticFormRow } from './StaticFormRow'

export const StatefulFormRow: FunctionComponent<FormRowProps> = ({
  children,
  disabled,
  error,
  errorText,
  focused,
  helperText,
  label,
  populated,
  required,
  getStyles,
}) => (
  <StaticFormRow
    errorText={errorText}
    helperText={helperText}
    label={label}
    required={required}
    styles={getStyles({ disabled, focused, populated, error })}
  >
    {children}
  </StaticFormRow>
)
