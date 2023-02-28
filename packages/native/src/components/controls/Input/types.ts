import { ColorName, UnitPaddingProps } from '@shallot-ui/theme'
import { FunctionComponent, HTMLProps, ReactNode, SVGProps } from 'react'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

export interface DisplayInputProps {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  styles?: InputComponentStyles
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  children?: ReactNode
}

export interface InputState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export interface InputProps extends ColumnProps {
  value: boolean
  setValue: (value: boolean) => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles?: (props: { state?: InputState }) => InputComponentStyles

  color?: ColorName
}
