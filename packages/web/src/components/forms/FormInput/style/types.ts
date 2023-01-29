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

import { InputStateProps } from '../../../Input'
import { FormControlStateProps } from '../../FormControl'

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
  inputProps?: InputStateProps
}

export interface FormInputStatesProp {
  states?: { [stateName: string]: FormInputStateProps & FormControlStateProps }
}

export interface FormInputStyleProps
  extends FormInputStateProps,
    FormInputStatesProp,
    ContainerStyleProps {
  style?: Partial<CSSProperties>
}
