import { FunctionComponent, HTMLAttributes, ReactNode, SVGProps } from 'react'
import { AllColorShades } from '@shallot-ui/theme'
import {
  AnimationProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  ElevationProps,
  FlexProps,
  RadiusProps,
  SizingProps,
  TransitionProps,
  UnitsAroundProps,
  UnitPaddingProps,
  FontProps,
  FontSizeProps,
  LineHeightProps,
  LetterSpacingProps,
} from '@shallot-ui/theme'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'
import { StatefulProps, StaticProps } from '../../../types/component'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

type SharedInputProps = {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  startAdornment?: ReactNode
  endAdornment?: ReactNode
} & HTMLAttributes<HTMLInputElement>

export type StaticInputProps = StaticProps<
  SharedInputProps,
  InputComponentStyles
>

export type InputState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  error?: boolean
}

export type InputProps = StatefulProps<
  SharedInputProps,
  InputComponentStyles,
  InputState
>

export interface InputStyleProps
  extends AnimationProps,
    BorderProps,
    ColorProps,
    DisplayProps,
    ElevationProps,
    FlexProps,
    FontProps,
    FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    TransitionProps,
    UnitPaddingProps,
    UnitsAroundProps {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  focusedBackgroundColor?: AllColorShades
  focusedBorderColor?: AllColorShades
}
