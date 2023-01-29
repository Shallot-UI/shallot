import { ReactNode } from 'react'
import { TextStyleProps } from '../../Text'
import { ColumnStyleProps } from '../../primitives/Column'

export interface FormControlRowComponentStyles {
  container?: ColumnStyleProps
  details?: ColumnStyleProps
  label?: TextStyleProps
  helperText?: TextStyleProps
  errorText?: TextStyleProps
  requiredStar?: TextStyleProps
}

export interface FormControlRowStyleProps {
  styles?: FormControlRowComponentStyles & {
    states?: Record<string, FormControlRowComponentStyles | undefined>
  }
}

export interface FormControlRowProps
  extends FormControlRowStyleProps,
    ColumnStyleProps {
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
