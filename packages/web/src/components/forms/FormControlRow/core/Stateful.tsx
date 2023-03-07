import { forwardRef } from 'react'

import { FormControlRowProps } from './types'
import DisplayFormControlRow from './Display'

export const StatefulFormControlRow = forwardRef<
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
      getStyles,
    },
    ref,
  ) => (
    <DisplayFormControlRow
      ref={ref}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={getStyles({ disabled, focused, populated, error })}
    >
      {children}
    </DisplayFormControlRow>
  ),
)

export default StatefulFormControlRow
