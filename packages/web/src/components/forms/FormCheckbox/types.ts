import { CheckboxStyleProps } from '../../Checkbox'
import { InputProps } from '../../primitives/Input/base'
import {
  FormControlRowComponentStyles,
  FormControlRowProps,
} from '../FormControlRow'

export interface FormCheckboxComponentStyles
  extends FormControlRowComponentStyles {
  input?: FormCheckboxStyleProps
}

export interface FormCheckboxStyleProps {
  styles?: FormCheckboxComponentStyles & {
    checkbox?: CheckboxStyleProps['styles']
    states?: Record<string, FormCheckboxComponentStyles | undefined>
  }
}

export interface FormCheckboxProps
  extends Omit<FormControlRowProps, 'styles' | 'children'>,
    FormCheckboxStyleProps,
    InputProps {}
