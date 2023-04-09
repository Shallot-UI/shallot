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
  PropsConfig,
  radiusProps,
  sizingProps,
  textAlignProps,
  underlineProps,
  unitsAroundProps,
} from '@shallot-ui/core'

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
  ...radiusProps,
  ...sizingProps,
  ...textAlignProps,
  ...underlineProps,
  ...unitsAroundProps,
}
