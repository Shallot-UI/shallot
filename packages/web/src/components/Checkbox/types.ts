import { FunctionComponent, ReactNode, SVGProps } from 'react'
import { BoxStyleProps, ColumnStyleProps } from '../primitives'

export interface CheckboxComponentStyles {
  container?: ColumnStyleProps
  fill?: ColumnStyleProps
  icon?: BoxStyleProps
}

export interface CheckboxStyleProps {
  styles?: CheckboxComponentStyles & {
    states?: Record<string, CheckboxComponentStyles | undefined>
  }
}

export interface CheckboxProps extends CheckboxStyleProps, ColumnStyleProps {
  value: boolean
  setValue: (value: boolean) => void

  disabled?: boolean
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  error?: boolean
  children?: ReactNode
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
}
