import { FunctionComponent, useRef } from 'react'

import { FormInputProps } from './types'
import { useFocus, useHover } from '../../../../hooks'
import { CoreInput } from '../../../controls/Input'
import { CoreFormControlColumn } from '../../FormControlColumn'

const StatefulFormInput: FunctionComponent<FormInputProps> = ({
  value,
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

  const styles = getStyles({ focused, hovered, error: !!errorText, disabled })

  return (
    <CoreFormControlColumn.Presentation
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
        {...rest}
        styles={styles.input}
      />
    </CoreFormControlColumn.Presentation>
  )
}

export default StatefulFormInput
