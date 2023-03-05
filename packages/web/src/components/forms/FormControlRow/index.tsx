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
      children,
      disabled,
      error,
      errorText,
      focused,
      helperText,
      label,
      populated,
      required,
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
      styles={getFormControlRowStyles(
        { disabled, focused, populated, error },
        rest,
      )}
    >
      {children}
    </DisplayFormControlRow>
  ),
)
