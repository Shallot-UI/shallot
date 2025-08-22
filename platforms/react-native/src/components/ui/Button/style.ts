import styled from 'styled-components/native'
import { ButtonShallot } from '@shallot-ui/component-button'
import { getNestedStyle, createStyledConfig } from '@/utils/styledHelpers'

const Container = styled.View.withConfig(
  createStyledConfig()
)<{ $active?: boolean; $disabled?: boolean; shallot?: ButtonShallot }>`
  ${getNestedStyle('Container')}
  ${(p) => p.$active && getNestedStyle('Container', ':active')(p)}
  ${(p) => p.$disabled && getNestedStyle('Container', ':disabled')(p)}
`

const Title = styled.Text.withConfig(
  createStyledConfig()
)<{
  $active?: boolean
  $disabled?: boolean
  shallot?: ButtonShallot
}>`
  ${getNestedStyle('Title')}
  ${(p) => p.$active && getNestedStyle('Title', ':active')(p)}
  ${(p) => p.$disabled && getNestedStyle('Title', ':disabled')(p)}
`

export default { Container, Title }
