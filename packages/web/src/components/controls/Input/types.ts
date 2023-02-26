import { ColorName, UnitPaddingProps } from '@shallot-ui/theme'
import { FunctionComponent, HTMLProps, ReactNode, SVGProps } from 'react'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

export interface DisplayInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'wrap' | 'as' | 'type'> {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: InputComponentStyles
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export interface InputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface InputProps extends ColumnProps {
  value: string
  setValue: (value: string) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles?: (props: { state?: InputState }) => InputComponentStyles

  color?: ColorName
}
