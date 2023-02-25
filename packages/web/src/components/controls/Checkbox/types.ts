import { FunctionComponent, ReactNode, SVGProps } from 'react'

import { BoxProps, ColumnProps } from '../../containers'

export interface CheckboxComponentStyles {
  container?: ColumnProps
  fill?: ColumnProps
  icon?: BoxProps
}

export interface DisplayCheckboxProps {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: CheckboxComponentStyles
  children?: ReactNode | ReactNode[]
}

export interface CheckboxProps extends ColumnProps {
  value: boolean
  setValue: (value: boolean) => void

  disabled?: boolean
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  error?: boolean
  children?: ReactNode
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>

  styles?: Record<string, CheckboxComponentStyles>
}
