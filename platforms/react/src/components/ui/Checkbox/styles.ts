import styled from 'styled-components'
import { getNestedStyle } from '@shallot-ui/core-utils'
import { CheckboxShallot } from '@shallot-ui/component-checkbox'

import { CheckIcon } from './Icons/CheckIcon'

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Icon = styled(CheckIcon)``

type ContainerProps = {
  shallot?: CheckboxShallot
  checked?: boolean
  disabled?: boolean
}

const Container = styled.div``

const Wrapper = styled.label.withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<ContainerProps>`
  display: flex;

  // Default Shallot Styles
  ${Container} {
    ${getNestedStyle('Container')}
  }
  ${Icon} {
    ${getNestedStyle('Icon')}
  }

  // Hover Shallot Styles
  &:hover {
    ${Container} {
      ${getNestedStyle('Container', ':hover')}
    }
    ${Icon} {
      ${getNestedStyle('Icon', ':hover')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${Container} {
      ${getNestedStyle('Container', ':focus')}
    }
    ${Icon} {
      ${getNestedStyle('Icon', ':focus')}
    }
  }

  // Checked Shallot Styles
  ${Container} {
    ${(props) =>
      props.checked && getNestedStyle('Container', ':checked')(props)}
  }
  ${Icon} {
    ${(props) => props.checked && getNestedStyle('Icon', ':checked')(props)}
  }

  // disabled
  ${Container} {
    ${(props) =>
      props.disabled && getNestedStyle('Container', ':disabled')(props)}
  }
  ${Icon} {
    ${(props) => props.disabled && getNestedStyle('Icon', ':disabled')(props)}
  }
`

export default {
  Container,
  Icon,
  Wrapper,
  Checkbox,
}
