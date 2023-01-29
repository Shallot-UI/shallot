import { CSSProperties } from 'react'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  TextAlignProps,
  UnderlineProps,
  SizingProps,
  FlexProps,
  LetterSpacingProps,
  TransitionProps,
  AnimationProps,
} from '@shallot-ui/theme'

export interface TextStyleProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    UnderlineProps,
    SizingProps,
    FlexProps,
    LetterSpacingProps,
    TransitionProps,
    AnimationProps {
  style?: Partial<CSSProperties>
}
