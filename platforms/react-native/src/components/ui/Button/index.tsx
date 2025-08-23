import React, { ReactNode, useState } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { withBoxLayoutProps, BoxLayoutProps } from '@shallot-ui/core-props'
import { ButtonProps, withButtonStyleProps } from '@shallot-ui/component-button'
import { ShallotProp } from '@shallot-ui/core-theme'

import S from './style'

const Base = (
  props: ButtonProps<TouchableOpacityProps> & {
    title?: string
    before?: ReactNode
    after?: ReactNode
  },
) => {
  const { title, before, after, shallot, disabled, ...touchableProps } = props
  const [active, setActive] = useState(false)

  return (
    <TouchableOpacity
      {...touchableProps}
      disabled={disabled}
      onPressIn={(e) => {
        touchableProps.onPressIn?.(e)
        setActive(true)
      }}
      onPressOut={(e) => {
        touchableProps.onPressOut?.(e)
        setActive(false)
      }}
    >
      <S.Container $active={active} $disabled={disabled} shallot={shallot}>
        {before}
        {title && (
          <S.Title $active={active} $disabled={disabled} shallot={shallot}>
            {title}
          </S.Title>
        )}
        {after}
      </S.Container>
    </TouchableOpacity>
  )
}

/**
 * Props interface for Shallot Button component
 * @public
 */
export interface ShallotButtonProps extends ButtonProps<TouchableOpacityProps>, BoxLayoutProps {
  title?: string
  before?: ReactNode
  after?: ReactNode
  shallot?: ShallotProp
  variant?: string
}

/**
 * Button component with Shallot styling capabilities and layout props
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
)
