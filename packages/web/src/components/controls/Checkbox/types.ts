import { FunctionComponent, HTMLAttributes, ReactNode, SVGProps } from 'react'

import { BoxProps, ColumnProps } from '../../containers'

export interface CheckboxComponentStyles {
  container?: ColumnProps
  icon?: BoxProps
}

export interface DisplayCheckboxProps extends HTMLAttributes<HTMLLabelElement> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: CheckboxComponentStyles
}

interface CheckboxState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface CheckboxProps extends ColumnProps {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles?: (props: { state?: CheckboxState }) => CheckboxComponentStyles
}
