import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import { transitionProps } from '../../../props'
import { AnchorLinkProps } from './types'

export const anchorLinkConfig: PropsConfig<AnchorLinkProps> = {
  ...borderProps,
  ...colorProps,
  ...cursorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...fontProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...unitsAroundProps,
}
