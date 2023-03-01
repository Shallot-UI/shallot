import { FunctionComponent } from 'react'

import { FormInputProps } from './types'
import { getFormInputStyles } from './getStyles'
import { DisplayFormControlColumn } from '../FormControlColumn'
import { DisplayInput } from '../../controls/Input'
import { pullRowProps } from '../../containers'

export * from './types'
export * from './getStyles'

export const FormInput: FunctionComponent<FormInputProps> = ({
  value,
  setValue,
  label,
  required,
  errorText,
  helperText,
  disabled,
  getStyles = getFormInputStyles,
  ...rest
}) => {
  const [rowOverrides, otherProps] = pullRowProps(rest)
  const styles = getStyles({ ...rowOverrides })

  return (
    <DisplayFormControlColumn
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <DisplayInput
        value={value}
        onChangeText={setValue}
        styles={styles.input}
        {...otherProps}
      />
    </DisplayFormControlColumn>
  )
}
