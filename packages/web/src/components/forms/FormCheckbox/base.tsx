import { FunctionComponent, useCallback, useState } from 'react'

import { pullUnitsAroundProps } from '../../../props'
import { pullProps } from '../../../utils/pullProps'
import { FormCheckboxProps } from './types'
import { useStyleProps } from '../../../hooks'
import { BaseFormControlRow } from '../FormControlRow'
import { Checkbox } from '../../Checkbox'

export const BaseFormCheckbox: FunctionComponent<FormCheckboxProps> = (
  props,
) => {
  const [focused, setFocused] = useState(false)
  const [populated, setPopulated] = useState(false)

  const [controlStyleProps, nonControlStyleProps] = pullProps(props, [
    pullUnitsAroundProps,
  ])

  const [inputStyleProps, nonStyleProps] = pullProps(nonControlStyleProps, [])

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
    error: Boolean(errorText),
  }

  const inputStyles = useStyleProps('input', styles, state)

  return (
    <BaseFormControlRow
      focused={focused}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles}
      {...controlStyleProps}
    >
      <Checkbox
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        {...inputStyles}
        {...rest}
      />
    </BaseFormControlRow>
  )
}
