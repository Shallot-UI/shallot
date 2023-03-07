import { forwardRef, MutableRefObject } from 'react'

import { CoreInput } from '../../../controls/Input'
import { CoreFormControlColumn } from '../../FormControlColumn'
import { DisplayFormInputProps } from './types'

const DisplayFormInput = forwardRef<HTMLInputElement, DisplayFormInputProps>(
  (
    {
      label,
      required,
      errorText,
      helperText,
      disabled,
      styles,
      value,
      ...rest
    },
    inputRef,
  ) => (
    <CoreFormControlColumn.Presentation
      onClick={() =>
        (inputRef as MutableRefObject<HTMLInputElement>)?.current?.focus()
      }
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <CoreInput.Presentation
        ref={inputRef}
        value={value}
        styles={styles.input}
        {...rest}
      />
    </CoreFormControlColumn.Presentation>
  ),
)

export default DisplayFormInput
