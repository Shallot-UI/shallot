import { ColorName } from '@shallot-ui/theme'
import { ReactNode } from 'react'

import { RowProps } from '../../containers'
import { TextProps } from '../../content'

export interface ButtonComponentStyles {
  container?: RowProps
  label?: TextProps
}

export interface DisplayButtonProps extends RowProps, TextProps {
  styles?: ButtonComponentStyles
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  children?: ReactNode
}

export interface ButtonState {
  disabled?: boolean
}

export interface ButtonProps extends DisplayButtonProps {
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  getStyles?: (props: { state?: ButtonState }) => ButtonComponentStyles
  color?: ColorName
  outline?: boolean
}
