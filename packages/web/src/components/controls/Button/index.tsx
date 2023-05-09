import { ComponentType, HTMLAttributes, RefObject, useRef } from 'react'
import styled from 'styled-components'
import {
  ButtonProps,
  ButtonShallot,
  withButtonStyleProps,
} from '@shallot-ui/button'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { Box } from '../../containers'
import { Text } from '../../content'

const ResetButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

const StaticButton = (
  props: HTMLAttributes<HTMLButtonElement> & {
    shallot?: ButtonShallot
    buttonRef?: RefObject<HTMLButtonElement>
  },
) => {
  const { title, shallot, buttonRef, ...rest } = props

  return (
    <ResetButton ref={buttonRef}>
      <Box shallot={shallot?.container} {...rest}>
        {title && <Text shallot={shallot?.title}>{title}</Text>}
      </Box>
    </ResetButton>
  )
}

export const withButtonState =
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
