import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'
import { ComponentProps } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'

import { getInputStyle } from './getStyle'
import { InputStyleProps } from './types'

export const Input = styled(TextInput)
  .attrs<InputStyleProps>(({ placeholderColor, theme }) => ({
    placeholderTextColor: placeholderColor && theme.colors[placeholderColor],
  }))
  .withConfig({
    shouldForwardProp: INTERNAL_shouldForwardProp,
  })`
  display: flex;
  border-style: solid;
  outline: none;
  ${getInputStyle}
`

export type InputProps = ComponentProps<typeof Input>
