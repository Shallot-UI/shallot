import { HTMLProps, ReactNode } from 'react'
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

export interface ButtonComponentStyles {
  container?: RowProps
  label?: TextProps
}

export interface StaticButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'as' | 'type' | 'wrap'> {
  styles: ButtonComponentStyles
  title?: string
  type?: 'button' | 'submit' | 'reset'
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  outline?: boolean
  disabled?: boolean
}

export interface ButtonState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export interface ButtonProps extends Omit<StaticButtonProps, 'styles'> {
  getStyles: (state: ButtonState) => ButtonComponentStyles
}

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
