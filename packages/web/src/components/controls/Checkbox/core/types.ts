import { FunctionComponent, HTMLAttributes, SVGProps } from 'react'

import { BoxProps, ColumnProps } from '../../../containers'

export interface CheckboxComponentStyles {
  container?: ColumnProps
  icon?: BoxProps
}

export interface DisplayCheckboxProps extends HTMLAttributes<HTMLLabelElement> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: CheckboxComponentStyles
}

export interface CheckboxState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface CheckboxProps extends Omit<DisplayCheckboxProps, 'styles'> {
  value: boolean
  setValue: (value: boolean) => void
  getStyles: (state?: CheckboxState) => CheckboxComponentStyles
}
