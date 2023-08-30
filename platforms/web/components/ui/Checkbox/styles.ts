import styled from 'styled-components'
import { getNestedStyle } from '@shallot-ui/core'
import { CheckboxShallot } from '@shallot-ui/checkbox'

import { CheckIcon } from './Icons/CheckIcon'

const Wrapper = styled.label`
  display: flex;
`

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

const Container = styled.div<ContainerProps>`
  // Default Shallot Styles
  ${getNestedStyle('Container')}
  ${Icon} {
    ${getNestedStyle('Icon')}
  }

  // Hover Shallot Styles
  &:hover {
    ${getNestedStyle('Container', ':hover')}
    ${Icon} {
      ${getNestedStyle('Icon', ':hover')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${getNestedStyle('Container', ':focus')}
    ${Icon} {
      ${getNestedStyle('Icon', ':focus')}
    }
  }

  // Checked Shallot Styles
  ${(props) => props.checked && getNestedStyle('Container', ':checked')(props)}
  ${Icon} {
    ${(props) => props.checked && getNestedStyle('Icon', ':checked')(props)}
  }

  // disabled
  ${(props) =>
    props.disabled && getNestedStyle('Container', ':disabled')(props)}
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
