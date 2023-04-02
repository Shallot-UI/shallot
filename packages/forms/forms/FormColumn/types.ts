import { HTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { AllColorShades, FontProps, UnitsAroundProps } from '@shallot-ui/theme'

import { ColumnProps } from '../../../web/src/components/containers'
import { TextProps } from '../../../web/src/components/content'

export interface FormColumnComponentStyles {
  container?: ColumnProps
  details?: ColumnProps
  label?: TextProps
  helperText?: TextProps
  errorText?: TextProps
  requiredStar?: TextProps
}

export interface StaticFormColumnProps extends HTMLAttributes<HTMLDivElement> {
  errorText?: string
  helperText?: string
  label?: string
  required?: boolean
  disabled?: boolean
  styles?: FormColumnComponentStyles
}

export interface FormColumnState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
  populated?: boolean
  error?: boolean
}

export interface FormColumnProps extends StaticFormColumnProps {
  disabled?: boolean
  focused?: boolean
  populated?: boolean
  error?: boolean
  getStyles: (state?: FormColumnState) => FormColumnComponentStyles
}

export interface FormColumnStyleProps extends UnitsAroundProps, FontProps {
  labelColor?: AllColorShades
  labelFontSize?: keyof DefaultTheme['fontSizes']
}
