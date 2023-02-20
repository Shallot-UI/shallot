import { HTMLProps, ReactNode } from 'react'

import { RowProps } from '../../containers'
import { TextProps } from '../../content'

export interface ButtonComponentStyles {
  container?: RowProps
  label?: TextProps
}

export interface ButtonProps
  extends RowProps,
    Omit<TextProps, 'style'>,
    Omit<HTMLProps<HTMLButtonElement>, 'wrap' | 'style' | 'children'> {
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  type?: 'button' | 'submit' | 'reset'

  styles?: ButtonComponentStyles & {
    states?: Record<string, ButtonComponentStyles | undefined>
  }
}
