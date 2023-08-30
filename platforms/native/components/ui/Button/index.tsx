import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { ButtonShallot, withButtonStyleProps } from '@shallot-ui/button'

const Container = styled.View(getStyle)
const Title = styled.Text(getStyle)

const StaticButton = (
  props: TouchableOpacityProps & {
    shallot?: ButtonShallot
    title?: string
  },
) => {
  const { title, shallot, ...touchableProps } = props

  return (
    <TouchableOpacity {...touchableProps}>
      <Container shallot={shallot?.Container}>
        {title && <Title shallot={shallot?.Title}>{title}</Title>}
      </Container>
    </TouchableOpacity>
  )
}

export const Button = withButtonStyleProps(StaticButton)
