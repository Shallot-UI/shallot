import { FunctionComponent, useRef } from 'react'
import { pullUnitsAroundProps, pullProps } from '@shallot-ui/core'

import { FormCheckboxProps } from './types'
import { FormControlRow } from '../FormControlRow'
import { useFocus, useHover } from '../../../hooks'
import { DisplayCheckbox } from '../../controls/Checkbox/display'

export const BaseFormCheckbox: FunctionComponent<FormCheckboxProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  styles,
  ...props
}) => {
  const checkboxRef = useRef<HTMLLabelElement>(null)

  const focused = useFocus(checkboxRef)
  const hovered = useHover(checkboxRef)

  const checkboxStateSelector = [
    value ? 'checked' : 'default',
    hovered ? 'hovered' : undefined,
    focused ? 'focused' : undefined,
  ]
    .filter(Boolean)
    .join(':')

  const [controlStyleProps, rest] = pullProps(props, [pullUnitsAroundProps])

  return (
    <FormControlRow
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      // styles={styles?.[stateSelector]?.formControlRow}
      {...controlStyleProps}
    >
      <DisplayCheckbox
        ref={checkboxRef}
        value={value}
        setValue={setValue}
        // styles={styles?.[stateSelector]?.checkbox}
        // {...inputStyles}
        {...rest}
      />
    </FormControlRow>
  )
}
