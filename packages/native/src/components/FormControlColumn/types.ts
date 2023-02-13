import { ReactNode } from 'react'
import { TextStyleProps } from '../Text'
import { ColumnStyleProps } from '../Column'
import { TextStyle, ViewStyle } from 'react-native'

export interface FormControlColumnComponentStyles {
  container?: ColumnStyleProps & { style?: ViewStyle }
  label?: TextStyleProps & { style?: TextStyle }
  helperText?: TextStyleProps & { style?: TextStyle }
  errorText?: TextStyleProps & { style?: TextStyle }
  requiredStar?: TextStyleProps & { style?: TextStyle }
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
