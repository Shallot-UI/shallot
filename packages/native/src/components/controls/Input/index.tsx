import { FunctionComponent } from 'react'

import { InputProps } from './types'
import { DisplayInput } from './display'

import { getInputStyles } from './getStyles'

export * from './types'
export * from './getStyles'
export * from './display'

export const Input: FunctionComponent<InputProps> = ({
  value,
  setValue,
  getStyles = getInputStyles,
  ...rest
}) => {
  const styles = getStyles({ state: { disabled: false }, ...rest })

  return (
    <DisplayInput
      value={value}
      onChangeText={setValue}
      styles={styles}
      {...rest}
    />
  )
}
