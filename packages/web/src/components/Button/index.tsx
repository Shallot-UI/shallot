import { FunctionComponent, HTMLProps, ReactNode } from 'react'

import { ButtonStyleProps } from './style/types'
import S from './style/components'
import { TextProps } from '../Text'

export interface ButtonProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'>,
    ButtonStyleProps {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined

  leftDecoration?: ReactNode
  rightDecoration?: ReactNode
}

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  as,
  ref,

  leftDecoration,
  rightDecoration,

  ...rest
}) => (
  <S.Container {...rest}>
    {leftDecoration}
    <S.Label>{title}</S.Label>
    {rightDecoration}
  </S.Container>
)

export * from './style/types'
