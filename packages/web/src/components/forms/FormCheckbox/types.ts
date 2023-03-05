import { FunctionComponent, SVGProps } from 'react'

import { CheckboxComponentStyles } from '../../controls'
import {
  DisplayFormControlRowProps,
  FormControlRowComponentStyles,
} from '../FormControlRow'

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

export interface FormCheckboxProps
  extends Omit<DisplayFormControlRowProps, 'styles' | 'children' | 'onClick'> {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles: (state?: FormCheckboxState) => FormCheckboxComponentStyles
}
