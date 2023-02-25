import { HTMLProps, ReactNode } from 'react'

import { ColumnProps, RowProps } from '../../containers'
import { InputProps as BareInputProps } from '../../containers/Input'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: BareInputProps
}

export interface DisplayInputProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    'ref' | 'children' | 'wrap' | 'as' | 'type' | 'onCopy'
  > {
  styles?: InputComponentStyles
  children?: ReactNode | ReactNode[]
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface InputProps
  extends RowProps,
    Omit<HTMLProps<HTMLInputElement>, 'ref' | 'wrap' | 'style' | 'children'> {
  disabled?: boolean
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  styles?: Record<string, InputComponentStyles>
}
