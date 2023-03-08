import { forwardRef } from 'react'

import { FormRowProps } from '../types'
import { StaticFormRow } from './StaticFormRow'

export const StatefulFormRow = forwardRef<HTMLDivElement, FormRowProps>(
  (
    {
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
    },
    ref,
  ) => (
    <StaticFormRow
      ref={ref}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={getStyles({ disabled, focused, populated, error })}
    >
      {children}
    </StaticFormRow>
  ),
)
