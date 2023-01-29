import { FunctionComponent, useCallback, useState } from 'react'

import { BaseFormControl, pullFormControlStyleProps } from '../../FormControl'
import Input from '../style/components/Input'
import { pullFormInputStyleProps } from '../style/pull'
import { FormInputProps } from '../types'

export const BaseFormInput: FunctionComponent<FormInputProps> = (props) => {
  const [focused, setFocused] = useState(false)

  const [controlStyleProps, nonControlStyleProps] =
    pullFormControlStyleProps(props)

  const [inputStyleProps, nonStyleProps] =
    pullFormInputStyleProps(nonControlStyleProps)

  const {
    onFocus,
    onBlur,
    label,
    required,
    errorText,
    helperText,
    disabled,
    value,
    ...rest
  } = nonStyleProps

  const isPopulated = Boolean(value)
  const hasError = Boolean(errorText)

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  return (
    <BaseFormControl
      focused={focused}
      disabled={disabled}
      populated={isPopulated}
      error={hasError}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      {...controlStyleProps}
    >
      <Input
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        {...inputStyleProps}
        {...rest}
      />
    </BaseFormControl>
  )
}
