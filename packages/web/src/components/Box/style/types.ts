import { CSSProperties } from 'react'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  CursorProps,
  TransitionProps,
  AnimationProps,
} from '@shallot-ui/theme'

export interface BoxStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    CursorProps,
    TransitionProps,
    AnimationProps {
  style?: Partial<CSSProperties>
}
