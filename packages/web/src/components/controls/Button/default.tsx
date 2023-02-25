import { FunctionComponent } from 'react'

import { BaseButton } from './base'
import { buttonStyles } from './styles'
import { ButtonProps } from './types'

export const Button: FunctionComponent<ButtonProps> = (props) => (
  <BaseButton styles={buttonStyles} {...props} />
)
