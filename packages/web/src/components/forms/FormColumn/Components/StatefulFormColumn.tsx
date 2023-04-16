import { FunctionComponent } from 'react'

import { StaticFormColumn } from './StaticFormColumn'
import { FormColumnProps } from '../types'

export const StatefulFormColumn: FunctionComponent<FormColumnProps> = ({
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
  <StaticFormColumn
    errorText={errorText}
    helperText={helperText}
    label={label}
    required={required}
    styles={getStyles?.({ disabled, focused, populated, error })}
  >
    {children}
  </StaticFormColumn>
)
