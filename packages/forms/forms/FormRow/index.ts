import { withStyleProps } from '../../../web/src/utils'
import { StatefulFormRow } from './Components'
import { getFormRowStyles } from './getStyles'

export * from './Components'
export * from './getStyles'
export * from './types'

export const FormRow = withStyleProps(StatefulFormRow, getFormRowStyles)
