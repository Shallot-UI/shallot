import { FunctionComponent, HTMLAttributes, SVGProps } from 'react'

import { CheckboxComponentStyles } from '../../../controls'
import {
  DisplayFormControlRowProps,
  FormControlRowComponentStyles,
} from '../../FormControlRow'

export interface FormCheckboxComponentStyles {
  checkbox?: CheckboxComponentStyles
  control?: FormControlRowComponentStyles
}

export interface FormCheckboxState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface DisplayFormCheckboxProps
  extends Omit<DisplayFormControlRowProps, 'styles' | 'children' | 'onClick'>,
    HTMLAttributes<HTMLLabelElement> {
  value?: boolean
  styles: FormCheckboxComponentStyles
}

export interface FormCheckboxProps
  extends Omit<DisplayFormControlRowProps, 'styles' | 'children' | 'onClick'> {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles: (state?: FormCheckboxState) => FormCheckboxComponentStyles
}
