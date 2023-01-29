import { ComponentProps, CSSProperties } from 'react'
import ReactSelect from 'react-select'
import { TextStyleProps } from '@shallot-ui/web'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  TransitionProps,
  CursorProps,
} from '@shallot-ui/theme'

interface WrapperStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {
  style?: Partial<CSSProperties>
}

interface FormSelectStateProps {
  wrapperProps?: WrapperStyleProps
  labelProps?: TextStyleProps
  helperTextProps?: TextStyleProps
  errorTextProps?: TextStyleProps
}

export interface FormSelectStyleProps
  extends FormSelectStateProps,
    WrapperStyleProps {
  states?: { [stateName: string]: FormSelectStateProps }
  style?: Partial<CSSProperties>
}

export interface FormSelectProps extends ComponentProps<typeof ReactSelect> {
  label?: string

  value?: string | string[]
  options?: { label: string; value: string }[]
  onChangeValue: (value: string | string[]) => void

  multiple?: boolean
  disabled?: boolean

  errorText?: string
  helperText?: string
}

export type ReactSelectClassNames =
  | 'clearIndicator'
  | 'container'
  | 'control'
  | 'dropdownIndicator'
  | 'group'
  | 'groupHeading'
  | 'indicatorsContainer'
  | 'indicatorSeparator'
  | 'input'
  | 'loadingIndicator'
  | 'loadingMessage'
  | 'menu'
  | 'menuList'
  | 'menuPortal'
  | 'multiValue'
  | 'multiValueLabel'
  | 'multiValueRemove'
  | 'noOptionsMessage'
  | 'option'
  | 'placeholder'
  | 'singleValue'
  | 'valueContainer'
