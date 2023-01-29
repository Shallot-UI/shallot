import { CSSProperties } from 'react'
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

import { TextStyleProps } from '../../../Text'

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

export interface FormControlStateProps {
  containerProps?: ContainerStyleProps
  labelProps?: TextStyleProps
  helperTextProps?: TextStyleProps
  errorTextProps?: TextStyleProps
}

export interface FormControlStatesProp {
  states?: { [stateName: string]: FormControlStateProps }
}

export interface FormControlStyleProps
  extends FormControlStateProps,
    FormControlStatesProp,
    ContainerStyleProps {
  style?: Partial<CSSProperties>
}
