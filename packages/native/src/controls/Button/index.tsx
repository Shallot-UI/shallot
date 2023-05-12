import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { ButtonShallot, withButtonStyleProps } from '@shallot-ui/button'

const ResetButton = styled.TouchableOpacity`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`

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
    <ResetButton {...rest}>
      <Container shallot={shallot?.container}>
        {title && <Title shallot={shallot?.title}>{title}</Title>}
      </Container>
    </ResetButton>
  )
}

export const Button = withButtonStyleProps(StaticButton)
