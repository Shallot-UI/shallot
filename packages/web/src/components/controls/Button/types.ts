import { HTMLProps, ReactNode } from 'react'

import { RowProps } from '../../containers'
import { TextProps } from '../../content'

export interface ButtonComponentStyles {
  container?: RowProps
  label?: TextProps
}

export interface DisplayButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'wrap' | 'as' | 'type'> {
  styles?: ButtonComponentStyles
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface ButtonState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export interface ButtonProps extends DisplayButtonProps {
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  getStyles?: (props: { state?: ButtonState }) => ButtonComponentStyles
}
