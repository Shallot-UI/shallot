import { FunctionComponent, useRef } from 'react'

import { FormInputProps } from '../types'
import { useFocus, useHover } from '../../../../hooks'
import { DisplayFormControlColumn } from '../../FormControlColumn/Base/display'
import { CoreInput } from '../../../controls/Input'

export const BaseFormInput: FunctionComponent<FormInputProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  getStyles,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(inputRef)
  const hovered = useHover(inputRef)

  const styles = getStyles({ focused, hovered })

  return (
    <DisplayFormControlColumn
      onClick={() => inputRef.current?.focus()}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <CoreInput.Presentation
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        styles={styles.input}
        {...rest}
      />
    </DisplayFormControlColumn>
  )
}
