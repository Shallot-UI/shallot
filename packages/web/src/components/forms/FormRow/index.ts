import { withStyleProps } from '@shallot-ui/core'

import { StatefulFormRow } from './Components'
import { getFormRowStyles } from './getStyles'
import { FormRowProps, FormRowStyleProps } from './types'

export * from './Components'
export * from './getStyles'
export * from './types'

export const FormRow = withStyleProps<FormRowStyleProps, FormRowProps>(
  StatefulFormRow,
  getFormRowStyles,
)
