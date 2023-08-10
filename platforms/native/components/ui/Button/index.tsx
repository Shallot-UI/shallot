import { TouchableOpacityProps } from 'react-native'
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
  const { title, shallot, ...rest } = props

  return (
    <Container shallot={shallot?.container}>
      {title && <Title shallot={shallot?.title}>{title}</Title>}
    </Container>
  )
}

export const Button = withButtonStyleProps(StaticButton)
