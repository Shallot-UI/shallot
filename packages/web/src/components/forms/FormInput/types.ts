import { InputStyleProps } from '../../primitives'
import { InputProps } from '../../primitives/Input/base'
import {
  FormControlColumnComponentStyles,
  FormControlColumnProps,
} from '../FormControlColumn'

export interface FormInputComponentStyles
  extends FormControlColumnComponentStyles {
  input?: InputStyleProps
}

export interface FormInputStyleProps {
  styles?: FormInputComponentStyles & {
    states?: Record<string, FormInputComponentStyles | undefined>
  }
}

export interface FormInputProps
  extends Omit<FormControlColumnProps, 'styles' | 'children'>,
    FormInputStyleProps,
    InputProps {}
