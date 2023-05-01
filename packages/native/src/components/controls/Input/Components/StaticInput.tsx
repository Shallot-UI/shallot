import { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { makeComponent } from '@shallot-ui/core'

import { Row } from '../../../containers'
import { StaticInputProps } from '../types'
import inputConfig from '../config'

const Input = makeComponent(
  TextInput,
  inputConfig,
  `
    display: flex;
    border-style: solid;
    outline: none;
  `,
)

export const StaticInput = forwardRef<TextInput, StaticInputProps>(
  ({ styles, startAdornment, endAdornment, ...rest }, ref) => (
    <Row {...styles?.container}>
      {startAdornment}
      <Input ref={ref} {...styles?.input} {...rest} />
      {endAdornment}
    </Row>
  ),
)
