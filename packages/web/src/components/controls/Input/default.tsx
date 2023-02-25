import { FunctionComponent } from 'react'
import { BaseInput } from './base'
import { InputProps } from './types'
import { inputStyles } from './styles'

export const Input: FunctionComponent<InputProps> = (props) => (
  <BaseInput styles={inputStyles} {...props} />
)
