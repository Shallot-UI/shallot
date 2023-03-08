import { ComponentProps } from 'react'
import ReactSelect from 'react-select'
import { StaticFormColumnProps, FormRowComponentStyles } from '@shallot-ui/web'

export interface FormSelectComponentStyles {
  // input?: InputComponentStyles
  control?: FormRowComponentStyles
}

export interface FormSelectState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
}

export interface FormSelectProps
  extends Omit<ComponentProps<typeof ReactSelect>, 'styles'>,
    Omit<
      StaticFormColumnProps,
      | 'onFocus'
      | 'onBlur'
      | 'defaultValue'
      | 'onChange'
      | 'onKeyDown'
      | 'placeholder'
      | 'styles'
    > {
  value?: string | string[]
  options?: { label: string; value: string }[]
  onChangeValue: (value: string | string[]) => void
  multiple?: boolean
  disabled?: boolean
  getStyles?: (props: { state?: FormSelectState }) => FormSelectComponentStyles
}
