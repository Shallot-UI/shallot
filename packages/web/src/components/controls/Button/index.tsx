import { FunctionComponent } from 'react'

import { ButtonStyleProps, getButtonStyles } from './getStyles'
import { ButtonProps } from './types'
import { BaseButton } from './Base'

export * from './types'

export const Button: FunctionComponent<
  Omit<ButtonProps, 'getStyles'> & ButtonStyleProps
> = (props) => (
  <BaseButton getStyles={(state) => getButtonStyles(state, props)} {...props} />
)
