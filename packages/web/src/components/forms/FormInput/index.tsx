import { FunctionComponent, useRef } from 'react'
import { pullUnitsAroundProps, pullProps } from '@shallot-ui/core'

import { FormInputProps } from './types'
import { getFormInputStyles } from './getStyles'
import { FormControlColumn } from '../FormControlColumn'
import { useFocus, useHover } from '../../../hooks'
import { DisplayInput } from '../../controls/Input'

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
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(inputRef)
  const hovered = useHover(inputRef)

  const styles = getStyles({ state: { focused, hovered } })
  const [controlOverrides, rest] = pullProps(props, [pullUnitsAroundProps])

  return (
    <FormControlColumn
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
      {...controlOverrides}
    >
      <DisplayInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        styles={styles.input}
        {...rest}
      />
    </FormControlColumn>
  )
}
