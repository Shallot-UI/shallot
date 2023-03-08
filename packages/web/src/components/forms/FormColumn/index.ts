import { withStyleProps } from '../../../utils'
import { StatefulFormColumn } from './Components'
import { getFormColumnStyles } from './getStyles'

export * from './Components'
export * from './getStyles'
export * from './types'

export const FormColumn = withStyleProps(
  StatefulFormColumn,
  getFormColumnStyles,
)
