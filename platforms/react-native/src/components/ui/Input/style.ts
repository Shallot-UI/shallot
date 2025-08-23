import styled from 'styled-components/native'
import { InputShallot } from '@shallot-ui/component-input'
import { getNestedStyle, createStyledConfig } from '@/utils/styledHelpers'

const Container = styled.View.withConfig(
  createStyledConfig()
)<{ $focused?: boolean; $error?: boolean; shallot?: InputShallot }>`
  ${getNestedStyle('Container')}
  ${(p) => p.$focused && getNestedStyle('Container', ':focused')(p)}
  ${(p) => p.$error && getNestedStyle('Container', ':error')(p)}
`

const InnerInput = styled.TextInput.withConfig(
  createStyledConfig()
)<{
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
