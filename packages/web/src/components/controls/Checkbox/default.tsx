import { FunctionComponent } from 'react'
import { BaseCheckbox } from './base'
import { CheckboxProps } from './types'
import { getCheckboxStyleProps } from './getStyleProps'

export const Checkbox: FunctionComponent<CheckboxProps> = (props) => (
  <BaseCheckbox
    // styles={getCheckboxStyleProps()}
    {...props}
  />
)
