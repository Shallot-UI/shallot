import { BoxStyleProps as BaseBoxStyleProps } from '@shallot-ui/box'
import { AnimationProps, RadiusProps, TransitionProps } from '@shallot-ui/theme'

export interface BoxStyleProps
  extends BaseBoxStyleProps,
    AnimationProps,
    RadiusProps,
    TransitionProps {}
