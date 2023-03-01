import {
  columnHorizontalAlignmentProps,
  columnVerticalAlignmentProps,
  PropsConfig,
} from '@shallot-ui/core'

import { boxConfig } from '../Box'
import { ColumnProps } from './types'

export const columnConfig: PropsConfig<ColumnProps> = {
  ...boxConfig,
  ...columnVerticalAlignmentProps,
  ...columnHorizontalAlignmentProps,
}
