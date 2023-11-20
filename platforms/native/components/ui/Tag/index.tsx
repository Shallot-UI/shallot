import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { TagShallot, withTagStyleProps } from '@shallot-ui/tag'
import { getStyle, withBoxLayoutProps } from '@shallot-ui/core'

const Container = styled.View(getStyle)
const Title = styled.Text(getStyle)

const StaticTag = (
  props: ViewProps & {
    title?: string
    shallot?: TagShallot
  },
) => {
  const { title, shallot, ...rest } = props

  return (
    <Container shallot={shallot?.Container} {...rest}>
      {title && <Title shallot={shallot?.Title}>{title}</Title>}
    </Container>
  )
}

export const Tag = withBoxLayoutProps(
  withTagStyleProps(StaticTag),
  { flexDirection: 'row' },
  'container',
)
