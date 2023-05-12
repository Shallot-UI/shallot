import { ComponentType, HTMLAttributes, RefObject, useRef } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  ButtonProps,
  ButtonShallot,
  withButtonStyleProps,
} from '@shallot-ui/button'

import { useFocus, useHover, usePressed } from '../../../hooks'

const ResetButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`

const Container = styled.div(getStyle)
const Title = styled.div(getStyle)

const StaticButton = (
  props: HTMLAttributes<HTMLButtonElement> & {
    shallot?: ButtonShallot
    buttonRef?: RefObject<HTMLButtonElement>
  },
) => {
  const { title, shallot, buttonRef, ...rest } = props

  return (
    <ResetButton ref={buttonRef} {...rest}>
      <Container shallot={shallot?.container}>
        {title && <Title shallot={shallot?.title}>{title}</Title>}
      </Container>
    </ResetButton>
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
        state={{ hovered, focused, pressed }}
        {...props}
      />
    )
  }

export const Button = withButtonState(withButtonStyleProps(StaticButton))
