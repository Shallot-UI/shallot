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
  DisplayProps,
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
    AnimationProps,
    DisplayProps {
  style?: Partial<CSSProperties>
}
