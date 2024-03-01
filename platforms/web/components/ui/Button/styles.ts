import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core'
import { ButtonShallot } from '@shallot-ui/button'

const Title = styled.span(getStyle)

const Container = styled.button.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ButtonShallot }>`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;

  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Title} {
    ${getNestedStyle('Title')}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      ${getNestedStyle('Container', ':disabled')}
      ${Title} {
        ${getNestedStyle('Title', ':disabled')}
      }
    `}

  // Hover Shallot Styles
  &:hover {
    ${getNestedStyle('Container', ':hover')}
    ${Title} {
      ${getNestedStyle('Title', ':hover')}
    }
  }

  // Active Shallot Styles
  &:active {
    ${getNestedStyle('Container', ':active')}
    ${Title} {
      ${getNestedStyle('Title', ':active')}
    }
  }

  // Focus Shallot Styles
  &:focus {
    ${getNestedStyle('Container', ':focus')}
    ${Title} {
      ${getNestedStyle('Title', ':focus')}
    }
  }
`

export default {
  Container,
  Title,
}
