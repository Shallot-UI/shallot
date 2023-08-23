import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core'
import { InputShallot } from '@shallot-ui/input'

const Input = styled.input(getStyle)

const Container = styled.div<{ shallot?: InputShallot; hasError?: boolean }>`
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
