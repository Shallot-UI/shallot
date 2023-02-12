import { ReactNode } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import { RowStyleProps } from '../Row'
import { TextStyleProps } from '../Text'

export interface ButtonComponentStyles {
  container?: RowStyleProps & { style?: ViewStyle }
  label?: TextStyleProps & { style?: TextStyle }
}

export interface ButtonStyleProps {
  styles?: ButtonComponentStyles & {
    states?: Record<string, ButtonComponentStyles | undefined>
  }
}

export interface ButtonProps
  extends ButtonStyleProps,
    RowStyleProps,
    Omit<TextStyleProps, 'style'> {
  onPress?: () => void | Promise<void>
  disabled?: boolean
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}
