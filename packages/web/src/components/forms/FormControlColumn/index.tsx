import { FunctionComponent } from 'react'

import { getFormControlColumnStyles } from './getStyles'
import { FormControlColumnProps } from './types'
import { BaseFormControlColumn } from './Base'

export * from './types'
export * from './getStyles'

export const FormControlColumn: FunctionComponent<
  Omit<FormControlColumnProps, 'getStyles'>
> = (props) => (
  <BaseFormControlColumn getStyles={getFormControlColumnStyles} {...props} />
)
