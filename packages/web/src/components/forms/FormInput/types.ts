import { HTMLProps } from 'react'
import { InputProps } from '../../controls'
import {
  FormControlColumnComponentStyles,
  FormControlColumnProps,
} from '../FormControlColumn'

export interface FormInputComponentStyles
  extends FormControlColumnComponentStyles {
  input?: InputProps
}

export interface FormInputProps
  extends Omit<FormControlColumnProps, 'styles' | 'children'>,
    Omit<InputProps, 'as'>,
    Omit<HTMLProps<HTMLInputElement>, 'wrap'> {
  styles?: FormInputComponentStyles & {
    states?: Record<string, FormInputComponentStyles | undefined>
  }
}
