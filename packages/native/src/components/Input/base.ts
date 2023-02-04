import { ComponentProps } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'

import { getInputStyle } from './getStyle'
import { InputStyleProps } from './types'

export const Input = styled(TextInput)<InputStyleProps>`
  display: flex;
  border-style: solid;
  outline: none;
  ${getInputStyle}
`

export type InputProps = ComponentProps<typeof Input>
