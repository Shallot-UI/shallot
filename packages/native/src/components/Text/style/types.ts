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
  extends CasingProps,
    ColorProps,
    FlexProps,
    FontProps,
    FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    SizingProps,
    TextAlignProps,
    UnderlineProps,
    UnitsAroundProps {}
