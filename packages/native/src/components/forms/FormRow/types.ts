import { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades, FontProps, UnitsAroundProps } from '@shallot-ui/theme'

import { ColumnProps } from '../../containers'
import { TextProps } from '../../content'
import { StatefulProps, StaticProps } from '../../../types/component'

export type FormRowComponentStyles = {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

type SharedFormRowProps = {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  children?: ReactNode
  onClick?: () => void
}

export type StaticFormRowProps = StaticProps<
  SharedFormRowProps,
  FormRowComponentStyles
>

export type FormRowState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export type FormRowProps = StatefulProps<
  SharedFormRowProps,
  FormRowComponentStyles,
  FormRowState
>

export interface FormRowStyleProps extends UnitsAroundProps, FontProps {
  labelColor?: AllColorShades
  labelFontSize?: keyof DefaultTheme['fontSizes']
}
