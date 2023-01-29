import { ComponentProps } from 'react'
import styled from 'styled-components'
import { getInputStyle } from './getStyle'
import { InputStyleProps } from './types'

export const Input = styled.input<InputStyleProps>`
  display: flex;
  border-style: solid;
  outline: none;
  ${getInputStyle}
`

export type InputProps = ComponentProps<typeof Input>
