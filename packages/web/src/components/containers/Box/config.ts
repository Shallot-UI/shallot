import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  transitionProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import { BoxProps } from './types'

export const boxConfig: PropsConfig<BoxProps> = {
  ...borderProps,
  ...colorProps,
  ...cursorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...unitsAroundProps,
}
