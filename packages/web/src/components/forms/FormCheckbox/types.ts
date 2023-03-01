import { FunctionComponent, HTMLAttributes, SVGProps } from 'react'
import { CheckboxComponentStyles } from '../../controls'
import {
  DisplayFormControlRowProps,
  FormControlRowComponentStyles,
} from '../FormControlRow/types'

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

export interface FormCheckboxProps extends DisplayFormControlRowProps {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles?: (props: {
    state?: FormCheckboxState
  }) => FormCheckboxComponentStyles
}
