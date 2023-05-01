import { withStyleProps } from '@shallot-ui/core'

import { StatefulFormColumn } from './Components'
import { getFormColumnStyles } from './getStyles'
import { FormColumnProps, FormColumnStyleProps } from './types'

export * from './Components'
export * from './getStyles'
export * from './types'

export const FormColumn = withStyleProps<FormColumnStyleProps, FormColumnProps>(
  StatefulFormColumn,
  getFormColumnStyles,
)
