import { forwardRef } from 'react'

import { getFormControlRowStyles } from '../getStyles'
import { FormControlRowProps } from '../types'
import { DisplayFormControlRow } from './display'

export const BaseFormControlRow = forwardRef<
  HTMLDivElement,
  FormControlRowProps
>(
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
      styles={getFormControlRowStyles({ disabled, focused, populated, error })}
    >
      {children}
    </DisplayFormControlRow>
  ),
)
