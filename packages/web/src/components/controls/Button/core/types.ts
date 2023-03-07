import { HTMLProps, ReactNode } from 'react'

import { RowProps } from '../../../containers'
import { TextProps } from '../../../content'

export interface ButtonComponentStyles {
  container?: RowProps
  label?: TextProps
}

export interface DisplayButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'as' | 'type' | 'wrap'> {
  styles: ButtonComponentStyles
  title?: string
  type?: 'button' | 'submit' | 'reset'
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface ButtonState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export interface ButtonProps extends Omit<DisplayButtonProps, 'styles'> {
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  outline?: boolean
  getStyles: (state?: ButtonState) => ButtonComponentStyles
}
