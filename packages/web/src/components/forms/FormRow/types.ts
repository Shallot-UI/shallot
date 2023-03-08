import { UnitsAroundProps } from '@shallot-ui/theme'
import { MouseEvent, ReactNode } from 'react'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface FormRowComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface StaticFormRowProps {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  styles?: FormRowComponentStyles
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export interface FormRowState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export interface FormRowProps extends Omit<StaticFormRowProps, 'styles'> {
  getStyles: (state?: FormRowState) => FormRowComponentStyles
}

export interface FormRowStyleProps extends UnitsAroundProps {}
