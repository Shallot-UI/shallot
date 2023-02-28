import { StyleProp } from 'react-native'

import { InputProps, InputStyleProps } from '../Input'
import {
  FormControlColumnComponentStyles,
  FormControlColumnProps,
} from '../FormControlColumn'

export interface FormInputComponentStyles
  extends FormControlColumnComponentStyles {
  input?: InputStyleProps & {}
}

export interface FormInputStyleProps {
  styles?: FormInputComponentStyles & {
    states?: Record<string, FormInputComponentStyles | undefined>
  }
}

export interface FormInputProps
  extends Omit<FormControlColumnProps, 'styles' | 'children'>,
    FormInputStyleProps,
    Omit<InputProps, 'as'> {}
