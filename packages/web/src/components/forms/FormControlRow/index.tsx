import { forwardRef } from 'react'

import { getFormControlRowStyles } from './getStyles'
import { FormControlRowProps } from './types'
import { DisplayFormControlRow } from './display'

export * from './display'
export * from './getStyles'
export * from './types'

export const FormControlRow = forwardRef<HTMLDivElement, FormControlRowProps>(
  (
    {
      errorText,
      helperText,
      label,
      required,
      disabled,
      focused,
      populated,
      error,
      children,

      ...rest
    },
    ref,
  ) => (
    <DisplayFormControlRow
      ref={ref}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={getFormControlRowStyles({
        ...rest,
        state: { disabled, focused, populated, error },
      })}
    >
      {children}
    </DisplayFormControlRow>
  ),
)
