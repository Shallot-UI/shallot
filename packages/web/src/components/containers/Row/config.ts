import { rowConfig as baseRowConfig } from '@shallot-ui/row'

import { animationProps, radiusProps, transitionProps } from '../../../props'

export const rowConfig = {
  ...baseRowConfig,
  ...animationProps,
  ...radiusProps,
  ...transitionProps,
}
