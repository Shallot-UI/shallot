import { FunctionComponent } from 'react'

import { DisplayInputProps } from './types'
import { inputConfig } from '../../containers/Input/config'
import { makeComponent } from '../../../utils'
import { rowConfig } from '../../containers'
import { TextInput, View } from 'react-native'

const Container = makeComponent(
  View,
  rowConfig,
  `display: flex; flex-direction: row; border-style: solid; overflow: hidden;`,
)

const Input = makeComponent(
  TextInput,
  inputConfig,
  `display: flex; border-style: solid; outline: none;`,
)

export const DisplayInput: FunctionComponent<DisplayInputProps> = ({
  styles,
  children,
  startAdornment,
  endAdornment,
  ...rest
}) => (
  <Container {...styles?.container}>
    {startAdornment}
    <Input {...styles?.input} {...rest} />
    {endAdornment}
  </Container>
)
