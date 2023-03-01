import { FunctionComponent, useCallback } from 'react'
import { FormControlColumn } from '@shallot-ui/web'

import { FormSelectProps } from './types'
import { optionForValue } from './utils'
import { DisplayFormSelect } from './display'
import { getFormSelectStyles } from './getStyles'

export * from './utils'
export * from './display'
export * from './types'
export * from './getStyles'

export const FormSelect: FunctionComponent<FormSelectProps> = ({
  ref,
  value,
  options,
  multiple,
  disabled,
  onChangeValue,
  label,
  errorText,
  helperText,
  required,
  getStyles = getFormSelectStyles,
  ...rest
}) => {
  const handleChange = useCallback(
    (selection: any) =>
      multiple
        ? onChangeValue(selection.map(({ value }: any) => value))
        : onChangeValue(selection.value),
    [onChangeValue, multiple],
  )

  const selectedOption = optionForValue(value, options, multiple)
  const styles = getStyles({ state: { disabled } })

  return (
    <FormControlColumn
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <DisplayFormSelect
        {...rest}
        ref={ref}
        value={selectedOption}
        options={options}
        onChange={handleChange}
        isMulti={multiple}
        isDisabled={disabled}
        required={required}
      />
    </FormControlColumn>
  )
}
