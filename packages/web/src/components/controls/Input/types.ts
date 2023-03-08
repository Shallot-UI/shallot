import { FunctionComponent, HTMLProps, ReactNode, SVGProps } from 'react'
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

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

export interface StaticInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'wrap' | 'as'> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: InputComponentStyles
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface InputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  error?: boolean
}

export interface InputProps extends Omit<StaticInputProps, 'styles'> {
  getStyles: (state: InputState) => InputComponentStyles
}

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
