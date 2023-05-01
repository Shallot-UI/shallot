import {
  AnimationProps,
  HorizontalAlignmentProps,
  RadiusProps,
  TransitionProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

import { BoxStyleProps } from '../Box'

export interface ColumnStyleProps
  extends BoxStyleProps,
    HorizontalAlignmentProps,
    VerticalAlignmentProps,
    AnimationProps,
    RadiusProps,
    TransitionProps {}
