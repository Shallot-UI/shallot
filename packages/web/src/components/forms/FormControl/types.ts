import { ReactNode } from 'react'
import { FormControlStyleProps } from './style/types'

export type FormControlState = 'disabled' | 'focused' | 'populated' | 'error'

export interface FormControlProps extends FormControlStyleProps {
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
