import { ReactNode } from 'react'
import { ColumnStyleProps } from '../Column'
import { RowStyleProps } from '../Row'
import { TextStyleProps } from '../Text'

export interface ButtonComponentStyles {
  container?: ColumnStyleProps
  label?: TextStyleProps
}

export interface ButtonStyleProps {
  styles?: ButtonComponentStyles & {
    states?: Record<string, ButtonComponentStyles | undefined>
  }
}

export interface ButtonProps
  extends ButtonStyleProps,
    RowStyleProps,
    TextStyleProps {
  onPress?: () => void | Promise<void>
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}
