import { ComponentType, RefObject, useState } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import {
  InputProps,
  InputShallot,
  withInputStyleProps,
} from '@shallot-ui/input'
import { ShallotProp } from '@shallot-ui/theme'

const Container = styled.View(getStyle)
const InnerInput = styled.TextInput<{ shallot?: ShallotProp }>(
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
  props: TextInputProps & {
    shallot?: InputShallot
    inputRef?: RefObject<HTMLInputElement>
  },
) => {
  const { shallot, inputRef, ...rest } = props

  return (
    <Container shallot={shallot?.Container}>
      {/* {startAdornment} */}
      <InnerInput shallot={shallot?.Input} {...rest} />
      {/* {endAdornment} */}
    </Container>
  )
}

const withInputState =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T>) => {
    const [focused, setFocused] = useState(false)

    return (
      <InputComponent
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        state={{ focused }}
        {...props}
      />
    )
  }

export const Input = withInputState(withInputStyleProps(StaticInput))
