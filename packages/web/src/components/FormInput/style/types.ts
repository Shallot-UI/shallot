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
import { InputStateProps } from '../../Input'
import { TextStyleProps } from '../../Text'

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

export interface FormInputStateProps {
  containerProps?: ContainerStyleProps
  inputProps?: InputStateProps
  labelProps?: TextStyleProps
  helperTextProps?: TextStyleProps
  errorTextProps?: TextStyleProps
}

export interface FormInputStatesProp {
  states?: { [stateName: string]: FormInputStateProps }
}

export interface FormInputStyleProps
  extends FormInputStateProps,
    FormInputStatesProp,
    ContainerStyleProps {
  style?: Partial<CSSProperties>
}
