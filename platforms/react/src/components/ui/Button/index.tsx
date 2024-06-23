import { ComponentProps, ReactNode, forwardRef } from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core-props'
import { ButtonProps, withButtonStyleProps } from '@shallot-ui/component-button'

import S from './styles'

const Base = forwardRef<HTMLButtonElement>(
  (
    props: ButtonProps<ComponentProps<typeof S.Container>> & {
      before?: ReactNode
      after?: ReactNode
    },
    ref,
  ) => {
    const { title, shallot, before, after, ...rest } = props

    return (
      <S.Container shallot={shallot} ref={ref} {...rest}>
        {before}
        {title && <S.Title>{title}</S.Title>}
        {after}
      </S.Container>
    )
  },
)

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
