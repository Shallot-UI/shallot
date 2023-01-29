import { ReactNode } from 'react'
import { TextStyleProps } from '../../Text'
import { ColumnStyleProps } from '../../primitives/Column'

export interface FormControlColumnComponentStyles {
  container?: ColumnStyleProps
  label?: TextStyleProps
  helperText?: TextStyleProps
  errorText?: TextStyleProps
  requiredStar?: TextStyleProps
}

export interface FormControlColumnStyleProps {
  styles?: FormControlColumnComponentStyles & {
    states?: Record<string, FormControlColumnComponentStyles | undefined>
  }
}

export interface FormControlColumnProps
  extends FormControlColumnStyleProps,
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
