import { FunctionComponent } from 'react'

import { FormControlRow } from '../FormControlRow'
import { Checkbox } from '../../controls/Checkbox'
import { FormCheckboxProps } from './types'
import { pullRowProps } from '../../containers'

export * from './types'

export const FormCheckbox: FunctionComponent<FormCheckboxProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  color,
  ...props
}) => {
  const [rowProps, rest] = pullRowProps(props)
  return (
    <FormControlRow
      onClick={() => setValue(!value)}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      {...rowProps}
    >
      <Checkbox value={value} setValue={setValue} color={color} {...rest} />
    </FormControlRow>
  )
}
