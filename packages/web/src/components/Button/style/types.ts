import { CSSProperties, HTMLProps, ReactNode } from 'react'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  TransitionProps,
  CursorProps,
} from '@shallot-ui/theme'

import { TextProps, TextStyleProps } from '../../Text'

interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {
  style?: Partial<CSSProperties>
}

interface ButtonStateProps {
  containerProps?: ContainerStyleProps
  labelProps?: TextStyleProps
}

export interface ButtonStyleProps
  extends ButtonStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: ButtonStateProps }
  style?: Partial<CSSProperties>
}
