import { ComponentProps } from 'react'
import styled from 'styled-components'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { getInputStyle } from './getStyle'
import { InputStyleProps } from './types'

export const Input = styled.input.withConfig<InputStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  display: flex;
  border-style: solid;
  outline: none;
  ${getInputStyle}
`

export type InputProps = ComponentProps<typeof Input>
