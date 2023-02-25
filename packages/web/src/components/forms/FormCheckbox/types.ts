import { HTMLProps } from 'react'
import {
  CheckboxComponentStyles,
  CheckboxProps,
  DisplayCheckboxProps,
} from '../../controls'
import {
  FormControlRowComponentStyles,
  FormControlRowProps,
} from '../FormControlRow'

export interface FormCheckboxComponentStyles
  extends FormControlRowComponentStyles {
  input?: CheckboxProps
}

export interface FormCheckboxProps
  extends Omit<
      HTMLProps<HTMLInputElement>,
      | 'ref'
      | 'children'
      | 'wrap'
      | 'as'
      | 'value'
      | 'onChange'
      | 'onFocus'
      | 'onBlur'
    >,
    Omit<FormControlRowProps, 'styles' | 'children'>,
    Omit<CheckboxProps, 'styles'> {
  value: boolean
  setValue: (value: boolean) => void
  styles?: Record<
    string,
    {
      formControlRow?: FormControlRowComponentStyles
      checkbox?: DisplayCheckboxProps['styles']
    }
  >
}
