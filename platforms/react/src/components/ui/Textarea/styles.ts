import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core-utils'
import { TextareaShallot } from '@shallot-ui/component-textarea'
import { ShallotProp } from '@shallot-ui/core-theme'

const Textarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ShallotProp }>(getStyle)

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: TextareaShallot; hasError?: boolean }>`
  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Textarea} {
    ${getNestedStyle('Textarea')}
  }

  // Hover Shallot Styles
  &:hover {
    ${getNestedStyle('Container', ':hover')}
    ${Textarea} {
      ${getNestedStyle('Textarea', ':hover')}
    }
  }

  // Active Shallot Styles
  &:active {
    ${getNestedStyle('Container', ':active')}
    ${Textarea} {
      ${getNestedStyle('Textarea', ':active')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${getNestedStyle('Container', ':focus')}
    ${Textarea} {
      ${getNestedStyle('Textarea', ':focus')}
    }
  }

  ${({ hasError }) =>
    hasError
      ? css`
          ${getNestedStyle('Container', ':error')}
          ${Textarea} {
            ${getNestedStyle('Textarea', ':error')}
          }
        `
      : ''}
`

export default {
  Container,
  Textarea,
}
