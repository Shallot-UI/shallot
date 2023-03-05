import { FunctionComponent, useRef } from 'react'

import { FormCheckboxProps } from '../types'
import { DisplayCheckbox } from '../../../controls/Checkbox/Base/display'
import { DisplayFormControlRow } from '../../FormControlRow/Base/display'
import { useFocus, useHover } from '../../../../hooks'

export * from '../types'

export const BaseFormCheckbox: FunctionComponent<FormCheckboxProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  getStyles,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLLabelElement>(null)
  const focused = useFocus(checkboxRef)
  const hovered = useHover(checkboxRef)

  const styles = getStyles({
    hovered,
    focused,
    disabled: false,
    checked: value,
  })

  return (
    <DisplayFormControlRow
      onClick={() => setValue(!value)}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <DisplayCheckbox
        ref={checkboxRef}
        styles={styles.checkbox}
        onClick={() => setValue(!value)}
      />
    </DisplayFormControlRow>
  )
}
