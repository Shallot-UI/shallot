import { boxConfig as baseBoxConfig } from '@shallot-ui/box'

import { animationProps, transitionProps, radiusProps } from '../../../props'

export const boxConfig = {
  ...baseBoxConfig,
  ...animationProps,
  ...radiusProps,
  ...transitionProps,
}
