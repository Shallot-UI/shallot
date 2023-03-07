import { FunctionComponent, useRef } from 'react'

import { useFocus, useHover } from '../../../../hooks'
import { FormCheckboxProps } from './types'
import DisplayFormCheckbox from './Display'

const StatefulFormCheckbox: FunctionComponent<FormCheckboxProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  getStyles,
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
    <DisplayFormCheckbox
      onClick={() => setValue(!value)}
      label={label}
      required={required}
      errorText={errorText}
      helperText={helperText}
      styles={styles}
    />
  )
}

export default StatefulFormCheckbox
