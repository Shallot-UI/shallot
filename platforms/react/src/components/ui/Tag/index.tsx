import { ComponentProps, ReactNode } from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core-props'
import { TagProps, withTagStyleProps } from '@shallot-ui/component-tag'

import S from './styles'

const Base = (
  props: TagProps<ComponentProps<typeof S.Container>> & {
    before?: ReactNode
    after?: ReactNode
  },
) => {
  const { title, shallot, before, after, ...rest } = props

  return (
    <S.Container shallot={shallot} {...rest}>
      {before}
      {title && <S.Title>{title}</S.Title>}
      {after}
    </S.Container>
  )
}

export const Tag: any = withBoxLayoutProps(
  // The style props are common utilities to extend the button's shallot prop
  // in common ways. For example, changing the button's color.
  withTagStyleProps(Base),
  // These are style overrides sent to the Button's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // button. The box is the outermost element that wraps the button's content
  // and it will be extended with any layout props passed to the button.
  'Container',
)
