import { FunctionComponent, useCallback, useState } from 'react'

import { pullUnitsAroundProps } from '../../../props'
import { pullProps } from '../../../utils/pullProps'
import { FormCheckboxProps } from './types'
import { useStyleProps } from '../../../hooks'
import { BaseFormControlRow } from '../FormControlRow'
import { BaseCheckbox } from '../../Checkbox'

export const BaseFormCheckbox: FunctionComponent<FormCheckboxProps> = (
  props,
) => {
  const [focused, setFocused] = useState(false)

  const [controlStyleProps, nonStyleProps] = pullProps(props, [
    pullUnitsAroundProps,
  ])

  const {
    value,
    setValue,

    onFocus,
    onBlur,
    label,
    required,
    errorText,
    helperText,
    disabled,
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

  const state = {
    disabled,
    focused,
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
      <BaseCheckbox
        value={value}
        setValue={setValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        styles={styles?.checkbox}
        {...inputStyles}
        {...rest}
      />
    </BaseFormControlRow>
  )
}
