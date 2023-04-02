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

import {
  letterSpacingProps,
  lineHeightProps,
  transitionProps,
} from '../../../props'
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
  ...letterSpacingProps,
  ...lineHeightProps,
}
