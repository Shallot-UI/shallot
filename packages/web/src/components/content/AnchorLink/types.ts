import { CSSProperties, ReactNode } from 'react'
import {
  AnimationProps,
  CasingProps,
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
  TextAlignProps,
  TransitionProps,
  UnderlineProps,
  UnitsAroundProps,
} from '@shallot-ui/theme'

export interface AnchorLinkProps
  extends AnimationProps,
    CasingProps,
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
    TextAlignProps,
    TransitionProps,
    UnderlineProps,
    UnitsAroundProps {
  style?: Partial<CSSProperties>
  children?: ReactNode | ReactNode[]
}
