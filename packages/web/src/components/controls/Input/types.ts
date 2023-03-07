import { FunctionComponent, HTMLProps, ReactNode, SVGProps } from 'react'
import { UnitPaddingProps } from '@shallot-ui/theme'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

export interface DisplayInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'wrap' | 'as'> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: InputComponentStyles
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface InputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  error?: boolean
}

export interface InputProps extends Omit<DisplayInputProps, 'styles'> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles: (state?: InputState) => InputComponentStyles
}
