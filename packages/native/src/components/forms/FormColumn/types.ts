import { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades, FontProps, UnitsAroundProps } from '@shallot-ui/theme'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'
import { StatefulProps, StaticProps } from '../../../types/component'

export type FormColumnComponentStyles = {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

type SharedFormColumnProps = {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  children?: ReactNode
}

export type StaticFormColumnProps = StaticProps<
  SharedFormColumnProps,
  FormColumnComponentStyles
>

export type FormColumnState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export type FormColumnProps = StatefulProps<
  SharedFormColumnProps,
  FormColumnComponentStyles,
  FormColumnState
>

export interface FormColumnStyleProps extends UnitsAroundProps, FontProps {
  labelColor?: AllColorShades
  labelFontSize?: keyof DefaultTheme['fontSizes']
}
