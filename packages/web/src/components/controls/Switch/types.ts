import { HTMLAttributes, StyleHTMLAttributes } from 'react'
import { ColorName, RadiusProps, UnitsAroundProps } from '@shallot-ui/theme'
import { ColumnProps } from '../../containers'

export interface SwitchConfig {
  label?: string
  inverted?: boolean
}

export interface SwitchComponentStyles {
  container?: ColumnProps & StyleHTMLAttributes<HTMLLabelElement>
  handle?: ColumnProps & StyleHTMLAttributes<HTMLDivElement>
}

export interface StaticSwitchProps extends HTMLAttributes<HTMLLabelElement> {
  styles?: SwitchComponentStyles
}

export interface SwitchState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface SwitchProps
  extends Omit<StaticSwitchProps, 'styles'>,
    SwitchConfig {
  value: boolean
  onChangeValue: (value: boolean) => void | Promise<void>
  getStyles: (state: SwitchState) => SwitchComponentStyles
}

export interface SwitchStyleProps extends UnitsAroundProps, RadiusProps {
  color?: ColorName
  size?: number
}
