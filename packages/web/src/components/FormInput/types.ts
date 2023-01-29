import { HTMLProps } from 'react'
import { TextProps } from '../Text'
import { FormInputStyleProps } from './style/types'

export type FormInputState = 'disabled' | 'focused' | 'populated' | 'error'

export interface FormInputProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLInputElement>, 'style' | 'height' | 'width'>,
    FormInputStyleProps {
  initialValue?: string
  label?: string
  errorText?: string
  helperText?: string
}
