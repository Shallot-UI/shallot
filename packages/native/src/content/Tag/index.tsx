import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { TagShallot, withTagStyleProps } from '@shallot-ui/tag'
import { getStyle } from '@shallot-ui/core'

const Container = styled.View(getStyle)
const Title = styled.View(getStyle)

const StaticTag = (
  props: ViewProps & {
    title?: string
    shallot?: TagShallot
  },
) => {
  const { title, shallot, ...rest } = props

  return (
    <Container shallot={shallot?.container} {...rest}>
      {title && <Title shallot={shallot?.title}>{title}</Title>}
    </Container>
  )
}

export const Tag = withTagStyleProps(StaticTag)
