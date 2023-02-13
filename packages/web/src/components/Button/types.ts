import { HTMLProps, ReactNode } from 'react'
import { RowStyleProps } from '../primitives'
import { TextStyleProps } from '../Text'

export interface ButtonComponentStyles {
  container?: RowStyleProps
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
    Omit<TextStyleProps, 'style'>,
    Omit<HTMLProps<HTMLButtonElement>, 'wrap'> {
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}
