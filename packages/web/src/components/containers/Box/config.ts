import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  PropsConfig,
  sizingProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import { animationProps, transitionProps, radiusProps } from '../../../props'
import { BoxProps } from './types'

export const boxConfig: PropsConfig<BoxProps> = {
  ...animationProps,
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
