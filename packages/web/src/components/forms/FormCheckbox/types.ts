import { CheckboxProps } from '../../controls'
import {
  FormControlRowComponentStyles,
  FormControlRowProps,
} from '../FormControlRow'

export interface FormCheckboxComponentStyles
  extends FormControlRowComponentStyles {
  input?: CheckboxProps
}

export interface FormCheckboxProps
  extends Omit<FormControlRowProps, 'styles' | 'children'>,
    CheckboxProps {
  styles?: FormCheckboxComponentStyles & {
    checkbox?: CheckboxProps['styles']
    states?: Record<string, FormCheckboxComponentStyles | undefined>
  }
}
