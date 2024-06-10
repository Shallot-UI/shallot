import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@repo/core'
import { ShallotProp } from '@repo/theme'
import { ButtonShallot } from '@repo/button'

const Title = styled.span.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ShallotProp }>(getStyle)

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

  ${(props) =>
    props.disabled
      ? css`
          ${getNestedStyle('Container', ':disabled')(props)}
          ${Title} {
            ${getNestedStyle('Title', ':disabled')(props)}
          }
        `
      : css`
          &:hover {
            ${getNestedStyle('Container', ':hover')(props)}
            ${Title} {
              ${getNestedStyle('Title', ':hover')(props)}
            }
          }

          &:active {
            ${getNestedStyle('Container', ':active')(props)}
            ${Title} {
              ${getNestedStyle('Title', ':active')(props)}
            }
          }

          &:focus {
            ${getNestedStyle('Container', ':focus')(props)}
            ${Title} {
              ${getNestedStyle('Title', ':focus')(props)}
            }
          }
        `};
`

export default {
  Container,
  Title,
}
