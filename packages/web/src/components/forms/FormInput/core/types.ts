import { HTMLAttributes } from 'react'

import { InputComponentStyles } from '../../../controls'
import {
  DisplayFormControlRowProps,
  FormControlRowComponentStyles,
} from '../../FormControlRow'

export interface FormInputComponentStyles {
  input?: InputComponentStyles
  control?: FormControlRowComponentStyles
}

export interface FormInputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  error?: boolean
}

export interface DisplayFormInputProps
  extends Omit<DisplayFormControlRowProps, 'styles' | 'children' | 'onClick'>,
    HTMLAttributes<HTMLInputElement> {
  value?: string
  styles: FormInputComponentStyles
}

export interface FormInputProps extends Omit<DisplayFormInputProps, 'styles'> {
  getStyles: (state?: FormInputState) => FormInputComponentStyles
  type?: 'password' | 'text' | 'email' | 'number' | 'tel' | 'url'
}
