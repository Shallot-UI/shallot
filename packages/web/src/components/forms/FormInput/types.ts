import { HTMLAttributes } from 'react'

import { InputComponentStyles } from '../../controls'
import {
  DisplayFormControlRowProps,
  FormControlRowComponentStyles,
} from '../FormControlRow/types'

export interface FormInputComponentStyles {
  input?: InputComponentStyles
  control?: FormControlRowComponentStyles
}

export interface DisplayInputProps extends HTMLAttributes<HTMLLabelElement> {
  styles?: FormInputComponentStyles
}

export interface FormInputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
}

export interface FormInputProps extends DisplayFormControlRowProps {
  value: string
  setValue: (value: string) => void
  getStyles?: (props: { state?: FormInputState }) => FormInputComponentStyles
}
