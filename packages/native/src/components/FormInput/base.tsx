import { FunctionComponent, useCallback, useState } from 'react'
import { useTheme } from 'styled-components/native'
import {
  useStyleProps,
  pullProps,
  pullFontProps,
  pullUnitsAroundProps,
} from '@shallot-ui/core'

import { Input } from '../Input'
import { BaseFormControlColumn } from '../FormControlColumn'
import { FormInputProps } from './types'

export const BaseFormInput: FunctionComponent<FormInputProps> = (props) => {
  const theme = useTheme()
  const [focused, setFocused] = useState(false)
  const [populated, setPopulated] = useState(false)

  const [controlStyleProps, nonControlStyleProps] = pullProps(props, [
    pullUnitsAroundProps,
  ])

  const [inputStyleProps, nonStyleProps] = pullProps(nonControlStyleProps, [
    pullFontProps,
  ])

  const {
    onFocus,
    onBlur,
    onChange,
    label,
    required,
    errorText,
    helperText,
    disabled,
    value,
    styles,
    valid,
    placeholderColor,
    ...rest
  } = nonStyleProps

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  const handleChange = useCallback((e: any) => {
    setPopulated(Boolean(e.target.value))
    onChange?.(e)
  }, [])

  const state = {
    disabled,
    focused,
    populated,
    valid,
    error: Boolean(errorText),
  }

  const inputStyles = useStyleProps('input', styles, state, inputStyleProps)

  return (
    <BaseFormControlColumn
      focused={focused}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles}
      {...controlStyleProps}
    >
      <Input
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        editable={!disabled}
        {...inputStyles}
        {...rest}
      />
    </BaseFormControlColumn>
  )
}
