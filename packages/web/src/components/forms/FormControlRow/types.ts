import { ReactNode } from 'react'

import { TextProps } from '../../content'
import { ColumnProps } from '../../containers'

export interface FormControlRowComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface FormControlRowProps extends ColumnProps {
  focused?: boolean
  disabled?: boolean
  populated?: boolean
  error?: boolean
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  children?: ReactNode

  styles?: FormControlRowComponentStyles & {
    states?: Record<string, FormControlRowComponentStyles | undefined>
  }
}
