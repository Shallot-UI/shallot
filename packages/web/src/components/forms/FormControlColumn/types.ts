import { HTMLAttributes } from 'react'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface FormControlColumnComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface DisplayFormControlColumnProps
  extends HTMLAttributes<HTMLInputElement | HTMLLabelElement> {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  styles?: FormControlColumnComponentStyles
}

export interface FormControlColumnState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export interface FormControlColumnProps extends DisplayFormControlColumnProps {
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  getStyles?: (props: {
    state?: FormControlColumnState
  }) => FormControlColumnComponentStyles
}
