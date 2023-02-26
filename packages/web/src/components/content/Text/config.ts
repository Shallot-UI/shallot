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
  lineHeightProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  transitionProps,
  underlineProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import { TextProps } from './types'

export const textConfig: PropsConfig<TextProps> = {
  ...borderProps,
  ...colorProps,
  ...cursorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...fontProps,
  ...fontSizeProps,
  ...lineHeightProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...underlineProps,
  ...casingProps,
  ...unitsAroundProps,
}
