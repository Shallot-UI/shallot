import React, { ComponentProps, HTMLProps, ReactNode, forwardRef } from 'react'
import { withBoxLayoutProps, BoxLayoutProps } from '@shallot-ui/core-props'
import { ButtonProps, withButtonStyleProps } from '@shallot-ui/component-button'
import { ShallotProp } from '@shallot-ui/core-theme'

import S from './styles'

const Base = forwardRef<
  HTMLButtonElement,
  ButtonProps<
    ComponentProps<typeof S.Container> & HTMLProps<HTMLButtonElement>
  > & { before?: ReactNode; after?: ReactNode }
>((props, ref) => {
  const { title, shallot, before, after, ...rest } = props

  return (
    <S.Container shallot={shallot} ref={ref} {...rest}>
      {before}
      {title && <S.Title>{title}</S.Title>}
      {after}
    </S.Container>
  )
})

/**
 * Props interface for Shallot Button component (web)
 * @public
 */
export interface ShallotButtonProps extends Omit<ButtonProps<ComponentProps<typeof S.Container> & HTMLProps<HTMLButtonElement>>, 'wrap'>, BoxLayoutProps {
  before?: ReactNode
  after?: ReactNode
  shallot?: ShallotProp
  variant?: string
}

/**
 * Button component with Shallot styling capabilities and layout props (web)
 */
export const Button: React.ComponentType<ShallotButtonProps> = withBoxLayoutProps(
  // The style props are common utilities to extend the button's shallot prop
  // in common ways. For example, changing the button's color.
  withButtonStyleProps(Base) as any,
  // These are style overrides sent to the Button's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // button. The box is the outermost element that wraps the button's content
  // and it will be extended with any layout props passed to the button.
  'Container',
) as any
