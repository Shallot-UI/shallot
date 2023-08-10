import {
  ComponentType,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useRef,
} from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  ButtonProps,
  ButtonShallot,
  withButtonStyleProps,
} from '@shallot-ui/button'

import { useFocus, useHover, usePressed } from '../../../hooks'

const Container = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
  ${getStyle}
`
const Title = styled.label(getStyle)

const StaticButton = (
  props: HTMLAttributes<HTMLButtonElement> & {
    shallot?: ButtonShallot
    buttonRef?: RefObject<HTMLButtonElement>
    before?: ReactNode
    after?: ReactNode
  },
) => {
  const { title, shallot, buttonRef, before, after, ...rest } = props

  return (
    <Container ref={buttonRef} shallot={shallot?.container} {...rest}>
      {before}
      {title && <Title shallot={shallot?.title}>{title}</Title>}
      {after}
    </Container>
  )
}

const withButtonState =
  <T,>(ButtonComponent: ComponentType<T>) =>
  (props: ButtonProps<T>) => {
    const ref = useRef<HTMLButtonElement>(null)
    const hovered = useHover(ref)
    const focused = useFocus(ref)
    const pressed = usePressed(ref)

    return (
      <ButtonComponent
        buttonRef={ref}
        state={{ hovered, focused, pressed, disabled: props.disabled }}
        {...props}
      />
    )
  }

export const Button = withButtonState(withButtonStyleProps(StaticButton))
