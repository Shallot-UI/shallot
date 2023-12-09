import styled from 'styled-components'
import { getNestedStyle } from '@shallot-ui/core'
import { SwitchShallot } from '@shallot-ui/switch'

const Handle = styled.div``

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Container = styled.div``

const Wrapper = styled.label.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: SwitchShallot; checked?: boolean }>`
  display: flex;

  // Default Shallot Styles
  ${Container} {
    ${getNestedStyle('Container')}
  }
  ${Handle} {
    ${getNestedStyle('Handle')}
  }

  // Hover Shallot Styles
  &:hover {
    ${Container} {
      ${getNestedStyle('Container', ':hover')}
    }
    ${Handle} {
      ${getNestedStyle('Handle', ':hover')}
    }
  }

  // Active Shallot Styles
  &:active {
    ${Container} {
      ${getNestedStyle('Container', ':active')}
    }
    ${Handle} {
      ${getNestedStyle('Handle', ':active')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${Container} {
      ${getNestedStyle('Container', ':focus')}
    }
    ${Handle} {
      ${getNestedStyle('Handle', ':focus')}
    }
  }

  // Checked Shallot Styles
  ${Container} {
    ${(props) =>
      props.checked && getNestedStyle('Container', ':checked')(props)}
  }
  ${Handle} {
    ${(props) => props.checked && getNestedStyle('Handle', ':checked')(props)}
  }
`

export default {
  Wrapper,
  Container,
  Handle,
  Checkbox,
}
