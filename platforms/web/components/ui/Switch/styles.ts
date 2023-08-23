import styled from 'styled-components'
import { getNestedStyle } from '@shallot-ui/core'
import { SwitchShallot } from '@shallot-ui/switch'

const Wrapper = styled.label`
  display: flex;
`

const Handle = styled.div``

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Container = styled.div<{ shallot?: SwitchShallot; checked?: boolean }>`
  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Handle} {
    ${getNestedStyle('Handle')}
  }

  // Hover Shallot Styles
  &:hover {
    ${getNestedStyle('Container', ':hover')}
    ${Handle} {
      ${getNestedStyle('Handle', ':hover')}
    }
  }

  // Active Shallot Styles
  &:active {
    ${getNestedStyle('Container', ':active')}
    ${Handle} {
      ${getNestedStyle('Handle', ':active')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${getNestedStyle('Container', ':focus')}
    ${Handle} {
      ${getNestedStyle('Handle', ':focus')}
    }
  }

  // Checked Shallot Styles
  ${(props) => props.checked && getNestedStyle('Container', ':checked')(props)}
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