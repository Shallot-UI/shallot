import {
  borderProps,
  casingProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  PropsConfig,
  sizingProps,
  textAlignProps,
  underlineProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import {
  fontSizeProps,
  letterSpacingProps,
  lineHeightProps,
  radiusProps,
} from '../../../props'
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
  ...underlineProps,
  ...unitsAroundProps,
}
