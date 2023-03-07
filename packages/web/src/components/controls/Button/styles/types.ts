import {
  AnimationProps,
  CasingProps,
  ColorName,
  FontProps,
  FontSizeProps,
  LetterSpacingProps,
  RadiusProps,
  TransitionProps,
  UnderlineProps,
  UnitsAroundProps,
} from '@shallot-ui/theme'

import { UserSelectProps } from '../../../../props'

export interface ButtonStyleProps
  extends AnimationProps,
    UnitsAroundProps,
    RadiusProps,
    FontProps,
    CasingProps,
    UnderlineProps,
    LetterSpacingProps,
    TransitionProps,
    UserSelectProps,
    FontSizeProps {
  color?: ColorName
  outline?: boolean
}
