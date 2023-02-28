import { FunctionComponent, useRef, useState } from 'react'
import { pullUnitsAroundProps, pullProps } from '@shallot-ui/core'

import { FormCheckboxProps } from './types'
import { getFormCheckboxStyles } from './getStyles'
import { FormControlRow } from '../FormControlRow'
import { useFocus, useHover } from '../../../hooks'
import { DisplayCheckbox } from '../../controls/Checkbox'

export * from './types'
export * from './getStyles'

export const FormCheckbox: FunctionComponent<FormCheckboxProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  getStyles = getFormCheckboxStyles,
  ...props
}) => {
  const checkboxRef = useRef<HTMLLabelElement>(null)
  const focused = useFocus(checkboxRef)
  const hovered = useHover(checkboxRef)

  const styles = getStyles({ state: { focused, hovered, checked: value } })
  const [controlOverrides, rest] = pullProps(props, [pullUnitsAroundProps])

  return (
    <FormControlRow
      onClick={() => setValue(!value)}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
      {...controlOverrides}
    >
      <DisplayCheckbox ref={checkboxRef} styles={styles.checkbox} {...rest} />
    </FormControlRow>
  )
}
