import {
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

import { BoxProps } from '../Box'

export interface ColumnProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxProps {}
