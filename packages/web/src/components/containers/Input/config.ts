import {
  borderProps,
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
  unitsAroundProps,
  unitsPaddingProps,
} from '@shallot-ui/core'

import { InputProps } from './types'

export const inputConfig: PropsConfig<InputProps> = {
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
  ...unitsAroundProps,
  ...unitsPaddingProps,
}
