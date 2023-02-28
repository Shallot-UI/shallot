import {
  borderProps,
  casingProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  fontSizeProps,
  letterSpacingProps,
  lineHeightProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  textAlignProps,
  underlineProps,
  unitsAroundProps,
} from '@shallot-ui/core'
import { transitionProps, userSelectProps } from '../../../props'

import { TextProps } from './types'

export const textConfig: PropsConfig<TextProps> = {
  ...textAlignProps,
  ...borderProps,
  ...colorProps,
  ...cursorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...fontProps,
  ...fontSizeProps,
  ...letterSpacingProps,
  ...lineHeightProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...underlineProps,
  ...casingProps,
  ...unitsAroundProps,
  ...userSelectProps,
}
