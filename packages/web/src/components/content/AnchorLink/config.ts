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
  transitionProps,
  unitsAroundProps,
} from '@shallot-ui/core'

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
