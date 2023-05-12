import {
  ComponentType,
  HTMLAttributes,
  MutableRefObject,
  RefObject,
  useRef,
} from 'react'
import styled, { CSSObject } from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import {
  InputProps,
  InputShallot,
  withInputStyleProps,
} from '@shallot-ui/Input'

import { useFocus, useHover, usePressed } from '../../../hooks'

const Container = styled.div(getStyle)
const InnerInput = styled.input<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        border: 'none',
        outline: 'none',
        ...shallot,
      },
      ...rest,
    }),
)

const StaticInput = (
  props: HTMLAttributes<HTMLInputElement> & {
    shallot?: InputShallot
    inputRef?: RefObject<HTMLInputElement>
  },
) => {
  const { title, shallot, inputRef, ...rest } = props

  return (
    <Container
      shallot={shallot?.container}
      onClick={() =>
        (inputRef as MutableRefObject<HTMLInputElement>)?.current?.focus()
      }
    >
      {/* {startAdornment} */}
      <InnerInput ref={inputRef} shallot={shallot?.input} {...rest} />
      {/* {endAdornment} */}
    </Container>
  )
}

const withInputState =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T>) => {
    const ref = useRef<HTMLInputElement>(null)
    const hovered = useHover(ref)
    const focused = useFocus(ref)
    const pressed = usePressed(ref)

    return (
      <InputComponent
        inputRef={ref}
        state={{ hovered, focused, pressed }}
        {...props}
      />
    )
  }

export const Input = withInputState(withInputStyleProps(StaticInput))
