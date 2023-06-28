import {
  ComponentType,
  Dispatch,
  HTMLAttributes,
  RefObject,
  SetStateAction,
  useRef,
} from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  CheckboxProps,
  CheckboxShallot,
  withCheckboxStyleProps,
} from '@shallot-ui/checkbox'

import { useFocus, useHover, usePressed } from '../../hooks'
import { CheckIcon } from './Icons/CheckIcon'

const ResetCheckbox = styled.div`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`

const Container = styled.div(getStyle)
const Icon = styled(CheckIcon)(getStyle)

const StaticCheckbox = (
  props: HTMLAttributes<HTMLDivElement> & {
    shallot?: CheckboxShallot
    checkboxRef?: RefObject<HTMLDivElement>
  },
) => {
  const { shallot, checkboxRef, ...rest } = props

  return (
    <ResetCheckbox ref={checkboxRef}>
      <Container shallot={shallot?.container} {...rest}>
        <Icon shallot={shallot?.icon} />
      </Container>
    </ResetCheckbox>
  )
}

const withCheckboxState =
  <T,>(CheckboxComponent: ComponentType<T>) =>
  (
    props: CheckboxProps<T> & {
      value?: boolean
      setValue?: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)
    },
  ) => {
    const ref = useRef<HTMLDivElement>(null)
    const focused = useFocus(ref)
    const hovered = useHover(ref)
    const pressed = usePressed(ref)

    return (
      <CheckboxComponent
        ref={ref}
        state={{ hovered, focused, pressed, checked: props.value }}
        onClick={() => props.setValue?.(!props.value)}
        {...props}
      />
    )
  }

export const Checkbox = withCheckboxState(
  withCheckboxStyleProps(StaticCheckbox),
)
