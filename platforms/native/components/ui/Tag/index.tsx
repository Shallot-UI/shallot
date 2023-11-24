import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components/native'
import { getStyle, withBoxLayoutProps } from '@shallot-ui/core'
import { TagProps, withTagStyleProps } from '@shallot-ui/tag'

const Container = styled.View(getStyle)
const Title = styled.Text(getStyle)

const Base = (
  props: TagProps<ComponentProps<typeof Container>> & {
    title?: string
    before?: ReactNode
    after?: ReactNode
  },
) => {
  const { title, before, after, shallot } = props

  return (
    <Container shallot={shallot?.Container}>
      {before}
      {title && <Title shallot={shallot?.Title}>{title}</Title>}
      {after}
    </Container>
  )
}

export const Tag = withBoxLayoutProps(
  // The style props are common utilities to extend the tag's shallot prop
  // in common ways. For example, changing the tag's color.
  withTagStyleProps(Base),
  // These are style overrides sent to the Tag's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // tag. The box is the outermost element that wraps the tag's content
  // and it will be extended with any layout props passed to the tag.
  'Container',
)
