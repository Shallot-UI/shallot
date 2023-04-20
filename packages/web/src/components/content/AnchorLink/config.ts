import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  PropsConfig,
  sizingProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import {
  fontSizeProps,
  letterSpacingProps,
  lineHeightProps,
  radiusProps,
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
  ...fontSizeProps,
  ...letterSpacingProps,
  ...lineHeightProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...unitsAroundProps,
}
