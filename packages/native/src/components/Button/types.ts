import { ColumnStyleProps } from '../Column'
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
    ColumnStyleProps,
    TextStyleProps {
  onPress?: () => void | Promise<void>
  disabled?: boolean
  title?: string
}
