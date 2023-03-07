import { AllColorShades } from '@shallot-ui/theme'
import {
  AnimationProps,
  BorderProps,
  ColorProps,
  CursorProps,
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

export interface InputStyleProps
  extends BorderProps,
    ColorProps,
    CursorProps,
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
    UnitsAroundProps,
    AnimationProps {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  focusedBackgroundColor?: AllColorShades
  focusedBorderColor?: AllColorShades
}
