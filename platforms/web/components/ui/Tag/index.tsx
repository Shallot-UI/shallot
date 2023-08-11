import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { TagShallot, withTagStyleProps } from '@shallot-ui/tag'
import { getStyle, withBoxLayoutProps } from '@shallot-ui/core'

const Container = styled.div(getStyle)
const Title = styled.div(getStyle)

const StaticTag = (
  props: HTMLAttributes<HTMLDivElement> & {
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

export const Tag = withBoxLayoutProps(
  withTagStyleProps(StaticTag),
  { flexDirection: 'row' },
  'container',
)
