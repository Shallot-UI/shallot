import { MouseEvent, ReactNode } from 'react'

import { ColumnProps } from '../../../containers'
import { TextProps } from '../../../content'

export interface FormControlRowComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface DisplayFormControlRowProps {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  styles?: FormControlRowComponentStyles
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface FormControlRowState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export interface FormControlRowProps
  extends Omit<DisplayFormControlRowProps, 'styles'> {
  focused?: boolean
  populated?: boolean
  error?: boolean
  getStyles: (state?: FormControlRowState) => FormControlRowComponentStyles
}
