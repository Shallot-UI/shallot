import { ReactNode } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
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

export type ButtonComponentStyles = {
  container?: RowProps & { style?: StyleProp<ViewStyle> }
  label?: TextProps & { style?: StyleProp<TextStyle> }
}

type SharedButtonProps = {
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  outline?: boolean
  disabled?: boolean
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type StaticButtonProps = StaticProps<
  SharedButtonProps,
  ButtonComponentStyles
>

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
