import {
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'
import { CSSProperties } from 'styled-components'

import { BoxProps } from '../Box'

export interface ColumnProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxProps {
  style?: CSSProperties
}
