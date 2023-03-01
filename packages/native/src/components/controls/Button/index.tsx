import { FunctionComponent } from 'react'

import { ButtonProps } from './types'
import { DisplayButton } from './display'
import { getButtonStyles } from './getStyles'

export * from './types'
export * from './getStyles'
export * from './display'

export const Button: FunctionComponent<ButtonProps> = ({
  getStyles = getButtonStyles,
  ...rest
}) => {
  const styles = getStyles({
    ...rest,
    state: { disabled: false },
  })

  return <DisplayButton styles={styles} {...rest} />
}
