import styled from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core'
import { SwitchShallot } from '@shallot-ui/switch'

const Wrapper = styled.label(getStyle)
const Handle = styled.div(getStyle)

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Container = styled.div<{ shallot?: SwitchShallot }>`
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

  ${Checkbox}:checked + & {
    ${getNestedStyle('Container', ':checked')}
    ${Handle} {
      ${getNestedStyle('Handle', ':checked')}
    }
  }
`

export default {
  Wrapper,
  Container,
  Handle,
  Checkbox,
}
