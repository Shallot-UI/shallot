import styled from 'styled-components/native'
import { getNestedStyle } from '@shallot-ui/core-utils'
import { ButtonShallot } from '@shallot-ui/component-button'

const Container = styled.View.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ $active?: boolean; $disabled?: boolean; shallot?: ButtonShallot }>`
  ${getNestedStyle('Container')}
  ${(p) => p.$active && getNestedStyle('Container', ':active')(p)}
  ${(p) => p.$disabled && getNestedStyle('Container', ':disabled')(p)}
`

const Title = styled.Text.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{
  $active?: boolean
  $disabled?: boolean
  shallot?: ButtonShallot
}>`
  ${getNestedStyle('Title')}
  ${(p) => p.$active && getNestedStyle('Title', ':active')(p)}
  ${(p) => p.$disabled && getNestedStyle('Title', ':disabled')(p)}
`

export default { Container, Title }
