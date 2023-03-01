import { ColorName, UnitPaddingProps } from '@shallot-ui/theme'
import { FunctionComponent, ReactNode, SVGProps } from 'react'
import { TextInputProps } from 'react-native'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'

export interface InputComponentStyles {
  container?: ColumnProps
  input?: ColumnProps & TextProps & UnitPaddingProps
}

export interface DisplayInputProps extends TextInputProps {
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

export interface InputProps extends ColumnProps, DisplayInputProps {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  getStyles?: (props: { state?: InputState }) => InputComponentStyles
  color?: ColorName
  value: string
  setValue: (value: string) => void
}
