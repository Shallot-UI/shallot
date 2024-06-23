import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core-utils'
import { InputShallot } from '@shallot-ui/component-input'
import { ShallotProp } from '@shallot-ui/core-theme'

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ShallotProp }>(getStyle)

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: InputShallot; hasError?: boolean }>`
  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Input} {
    ${getNestedStyle('Input')}
  }

  // Hover Shallot Styles
  &:hover {
    ${getNestedStyle('Container', ':hover')}
    ${Input} {
      ${getNestedStyle('Input', ':hover')}
    }
  }

  // Active Shallot Styles
  &:active {
    ${getNestedStyle('Container', ':active')}
    ${Input} {
      ${getNestedStyle('Input', ':active')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${getNestedStyle('Container', ':focus')}
    ${Input} {
      ${getNestedStyle('Input', ':focus')}
    }
  }

  ${({ hasError }) =>
    hasError
      ? css`
          ${getNestedStyle('Container', ':error')}
          ${Input} {
            ${getNestedStyle('Input', ':error')}
          }
        `
      : ''}
`

export default {
  Container,
  Input,
}
