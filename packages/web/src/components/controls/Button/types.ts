import { ComponentProps, HTMLProps, ReactNode } from 'react'
import { CSSObject } from 'styled-components'
import {
  AnimationProps,
  CasingProps,
  ColorName,
  ColorProps,
  FontProps,
  FontSizeProps,
  LetterSpacingProps,
  RadiusProps,
  UnderlineProps,
  UnitsAroundProps,
} from '@shallot-ui/theme'

import { RowProps } from '../../containers'
import { TextProps } from '../../content'
import { StatefulProps, StaticProps } from '../../../types/component'

export interface ButtonComponentStyles {
  container?: RowProps & { style?: CSSObject }
  label?: TextProps & { style?: CSSObject }
}

type SharedButtonProps = {
  title?: string
  type?: 'button' | 'submit' | 'reset'
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  outline?: boolean
  disabled?: boolean
} & HTMLProps<HTMLButtonElement>

export type StaticButtonProps = StaticProps<
  SharedButtonProps,
  ButtonComponentStyles
>

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type ButtonProps = StatefulProps<
  SharedButtonProps,
  ButtonComponentStyles,
  ButtonState
>

export interface ButtonStyleProps
  extends AnimationProps,
    ColorProps,
    RadiusProps,
    FontProps,
    UnitsAroundProps,
    CasingProps,
    UnderlineProps,
    LetterSpacingProps,
    FontSizeProps {
  color?: ColorName
  outline?: boolean
}
