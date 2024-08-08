import styled from 'styled-components/native'
import { getNestedStyle } from '@shallot-ui/core-utils'
import { InputShallot } from '@shallot-ui/component-input'

const Container = styled.View.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ $focused?: boolean; $error?: boolean; shallot?: InputShallot }>`
  ${getNestedStyle('Container')}
  ${(p) => p.$focused && getNestedStyle('Container', ':focused')(p)}
  ${(p) => p.$error && getNestedStyle('Container', ':error')(p)}
`

const InnerInput = styled.TextInput.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{
  $focused?: boolean
  $error?: boolean
  shallot?: InputShallot
}>`
  border: none;
  outline: none;

  ${getNestedStyle('Input')}
  ${(p) => p.$focused && getNestedStyle('Input', ':focused')(p)}
  ${(p) => p.$error && getNestedStyle('Input', ':error')(p)}
`

export default { Container, InnerInput }
