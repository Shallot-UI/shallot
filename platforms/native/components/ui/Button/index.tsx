import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { getStyle, withBoxLayoutProps } from '@shallot-ui/core'
import { ButtonProps, withButtonStyleProps } from '@shallot-ui/button'

const Container = styled.View(getStyle)
const Title = styled.Text(getStyle)

const Base = (
  props: ButtonProps<TouchableOpacityProps> & {
    title?: string
    before?: ReactNode
    after?: ReactNode
  },
) => {
  const { title, before, after, shallot, ...touchableProps } = props

  return (
    <TouchableOpacity {...touchableProps}>
      <Container shallot={shallot?.Container}>
        {before}
        {title && <Title shallot={shallot?.Title}>{title}</Title>}
        {after}
      </Container>
    </TouchableOpacity>
  )
}

export const Button = withBoxLayoutProps(
  // The style props are common utilities to extend the button's shallot prop
  // in common ways. For example, changing the button's color.
  withButtonStyleProps(Base),
  // These are style overrides sent to the Button's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // button. The box is the outermost element that wraps the button's content
  // and it will be extended with any layout props passed to the button.
  'Container',
)
