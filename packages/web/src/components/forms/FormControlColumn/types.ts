import { ReactNode } from 'react'

import { TextProps } from '../../content'
import { ColumnProps } from '../../containers'

export interface FormControlColumnComponentStyles {
  container?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface FormControlColumnStyleProps {
  styles?: FormControlColumnComponentStyles & {
    states?: Record<string, FormControlColumnComponentStyles | undefined>
  }
}

export interface FormControlColumnProps extends FormControlColumnStyleProps {
  focused?: boolean
  disabled?: boolean
  populated?: boolean
  error?: boolean
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  children?: ReactNode
}
