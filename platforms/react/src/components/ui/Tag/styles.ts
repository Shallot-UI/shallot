import styled from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core-utils'
import { TagShallot } from '@shallot-ui/component-tag'
import { ShallotProp } from '@shallot-ui/core-theme'

const Title = styled.span.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ShallotProp }>(getStyle)

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: TagShallot }>`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;

  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Title} {
    ${getNestedStyle('Title')}
  }

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
