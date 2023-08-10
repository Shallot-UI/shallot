import {
  ComponentType,
  FunctionComponent,
  InputHTMLAttributes,
  MutableRefObject,
  RefObject,
  useRef,
} from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  InputProps,
  InputShallot,
  withInputStyleProps,
} from '@shallot-ui/input'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { ShallotProp } from '@shallot-ui/theme'

const Container = styled.div(getStyle)
const Label = styled.label(getStyle)
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

const StaticInput: FunctionComponent<
  InputHTMLAttributes<HTMLInputElement> & {
    shallot?: InputShallot & { label?: ShallotProp }
    inputRef?: RefObject<HTMLInputElement>
    label?: typeof Label
  }
> = ({ shallot, inputRef, label, ...rest }) => (
  <Container
    shallot={shallot?.container}
    onClick={() =>
      (inputRef as MutableRefObject<HTMLInputElement>)?.current?.focus()
    }
  >
    {/* {startAdornment} */}
    <Label shallot={{ display: 'flex', flexGrow: 1, ...shallot?.label }}>
      {/* {Label} */}
      <InnerInput ref={inputRef} shallot={shallot?.input} {...rest} />
    </Label>

    {/* {endAdornment} */}
  </Container>
)

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
