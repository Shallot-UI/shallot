import { ComponentType, RefObject, useState } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import {
  InputProps,
  InputShallot,
  withInputStyleProps,
} from '@shallot-ui/Input'

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
    <Container shallot={shallot?.container}>
      {/* {startAdornment} */}
      <InnerInput shallot={shallot?.input} {...rest} />
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
