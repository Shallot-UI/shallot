import { FunctionComponent, useRef } from 'react'

import { FormInputProps } from './types'
import { getFormInputStyles } from './getStyles'
import { DisplayFormControlColumn } from '../FormControlColumn'
import { useFocus, useHover } from '../../../hooks'
import { DisplayInput } from '../../controls/Input/Base'
import { pullRowProps } from '../../containers'

export * from './types'
export * from './getStyles'

export const FormInput: FunctionComponent<FormInputProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  getStyles = getFormInputStyles,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(inputRef)
  const hovered = useHover(inputRef)

  const [rowOverrides, otherProps] = pullRowProps(rest)
  const styles = getStyles({ ...rowOverrides, state: { focused, hovered } })

  return (
    <DisplayFormControlColumn
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <DisplayInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        styles={styles.input}
        {...otherProps}
      />
    </DisplayFormControlColumn>
  )
}
