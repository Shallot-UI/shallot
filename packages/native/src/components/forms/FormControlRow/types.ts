import { ReactNode } from 'react'

import { ColumnProps, RowProps } from '../../containers'
import { TextProps } from '../../content'

export interface FormControlRowComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface DisplayFormControlRowProps extends RowProps {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  styles?: FormControlRowComponentStyles
  children?: ReactNode
}

export interface FormControlRowState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export interface FormControlRowProps extends DisplayFormControlRowProps {
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  getStyles?: (props: {
    state?: FormControlRowState
  }) => FormControlRowComponentStyles
  children?: ReactNode
}
