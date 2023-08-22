import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core'
import { InputShallot } from '@shallot-ui/input'
import { CheckIcon } from './Icons/CheckIcon'
import { CheckboxShallot } from '@shallot-ui/checkbox'

const Icon = styled(CheckIcon)``

const Container = styled.input.attrs({ type: 'checkbox' })<{ shallot?: CheckboxShallot, disabled?: boolean}>`
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

  // Active Shallot Styles
  &:checked {
    ${getNestedStyle('Container', ':checked')}
    ${Icon} {
      ${getNestedStyle('Icon', ':checked')}
    }
  }

  // Focus Shallot Styles
  &:focus-within {
    ${getNestedStyle('Container', ':focus')}
    ${Icon} {
      ${getNestedStyle('Icon', ':focus')}
    }
  }

  // disabled
  ${(props) => props.disabled && getNestedStyle('Container', ':disabled')(props)}
  ${Icon} {
    ${(props) => props.disabled && getNestedStyle('Handle', ':disabled')(props)}
  }
`

export default {
  Container,
  Icon,
}