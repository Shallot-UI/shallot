import { FunctionComponent, ReactNode, SVGProps } from 'react'

import { BoxProps, ColumnProps } from '../../containers'

export interface CheckboxComponentStyles {
  container?: ColumnProps
  fill?: ColumnProps
  icon?: BoxProps
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

  styles?: CheckboxComponentStyles & {
    states?: Record<string, CheckboxComponentStyles | undefined>
  }
}
