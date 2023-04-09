import { StyleHTMLAttributes } from 'react'
import { ColorName, RadiusProps, UnitsAroundProps } from '@shallot-ui/theme'
import { ColumnProps } from '../../containers'
import { StatefulProps, StaticProps } from '../../../types/component'

export interface SwitchConfig {
  label?: string
  inverted?: boolean
}

export interface SwitchComponentStyles {
  container?: ColumnProps & StyleHTMLAttributes<HTMLLabelElement>
  handle?: ColumnProps & StyleHTMLAttributes<HTMLDivElement>
}

type SharedSwitchProps = {
  onClick?: () => void
}

export type StaticSwitchProps = StaticProps<
  SharedSwitchProps,
  SwitchComponentStyles
>

export type SwitchState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type SwitchProps = StatefulProps<
  SharedSwitchProps &
    SwitchConfig & {
      value: boolean
      onChangeValue: (value: boolean) => void | Promise<void>
    },
  SwitchComponentStyles,
  SwitchState
>

export interface SwitchStyleProps extends UnitsAroundProps, RadiusProps {
  color?: ColorName
  size?: number
}
