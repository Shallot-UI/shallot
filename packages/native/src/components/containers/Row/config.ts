import {
  rowHorizontalAlignmentProps,
  rowVerticalAlignmentProps,
  PropsConfig,
} from '@shallot-ui/core'

import { boxConfig } from '../Box'
import { RowProps } from './types'

export const rowConfig: PropsConfig<RowProps> = {
  ...boxConfig,
  ...rowVerticalAlignmentProps,
  ...rowHorizontalAlignmentProps,
}
