import { CSSProperties } from 'react'
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
} from '@shallot-ui/theme'

export interface BoxStyleProps
  extends AnimationProps,
    BorderProps,
    ColorProps,
    CursorProps,
    DisplayProps,
    ElevationProps,
    FlexProps,
    RadiusProps,
    SizingProps,
    TransitionProps,
    UnitsAroundProps {
  style?: Partial<CSSProperties>
}
