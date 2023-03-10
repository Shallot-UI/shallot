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
  ...borderProps,
  ...casingProps,
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
  ...textAlignProps,
  ...transitionProps,
  ...underlineProps,
  ...unitsAroundProps,
  ...userSelectProps,
}
