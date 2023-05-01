import {
  AnimationProps,
  HorizontalAlignmentProps,
  RadiusProps,
  TransitionProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

import { BoxStyleProps } from '../Box'

export interface RowStyleProps
  extends BoxStyleProps,
    HorizontalAlignmentProps,
    VerticalAlignmentProps,
    AnimationProps,
    RadiusProps,
    TransitionProps {}
