import {
  casingProps,
  fontProps,
  fontSizeProps,
  letterSpacingProps,
  PropsConfig,
  radiusProps,
  underlineProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import {
  animationProps,
  transitionProps,
  userSelectProps,
} from '../../../../props'
import { ButtonStyleProps } from '../styles/types'

const buttonConfig: PropsConfig<ButtonStyleProps> = {
  ...animationProps,
  ...casingProps,
  ...fontProps,
  ...fontSizeProps,
  ...letterSpacingProps,
  ...radiusProps,
  ...transitionProps,
  ...underlineProps,
  ...unitsAroundProps,
  ...userSelectProps,
}

export default buttonConfig
