import { FunctionComponent } from 'react'

import { getFormControlRowStyles } from './getStyles'
import { FormControlRowProps } from './types'
import { BaseFormControlRow } from './Base'

export * from './types'
export * from './getStyles'

export const FormControlRow: FunctionComponent<
  Omit<FormControlRowProps, 'getStyles'>
> = (props) => (
  <BaseFormControlRow getStyles={getFormControlRowStyles} {...props} />
)
