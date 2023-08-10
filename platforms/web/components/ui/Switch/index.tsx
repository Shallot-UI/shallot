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
  SwitchProps,
  SwitchShallot,
  withSwitchStyleProps,
} from '@shallot-ui/switch'

import { useFocus, useHover, usePressed } from '../../../hooks'

const Container = styled.div(getStyle)
const Handle = styled.div(getStyle)

const StaticSwitch = (
  props: HTMLAttributes<HTMLDivElement> & {
    shallot?: SwitchShallot
    inputRef?: RefObject<HTMLDivElement>
  },
) => {
  const { shallot, inputRef, ...rest } = props

  return (
    <Container ref={inputRef} shallot={shallot?.container} {...rest}>
      <Handle shallot={shallot?.handle} />
    </Container>
  )
}

const withSwitchState =
  <T,>(SwitchComponent: ComponentType<T>) =>
  (
    props: SwitchProps<T> & {
      value?: boolean
      setValue?: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)
    },
  ) => {
    const ref = useRef<HTMLDivElement>(null)
    const focused = useFocus(ref)
    const hovered = useHover(ref)
    const pressed = usePressed(ref)

    return (
      <SwitchComponent
        inputRef={ref}
        state={{ hovered, focused, pressed, checked: props.value }}
        onClick={() => props.setValue?.(!props.value)}
        {...props}
      />
    )
  }

export const Switch = withSwitchState(withSwitchStyleProps(StaticSwitch))
