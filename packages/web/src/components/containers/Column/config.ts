import { columnConfig as baseColumnConfig } from '@shallot-ui/column'

import { animationProps, radiusProps, transitionProps } from '../../../props'

export const columnConfig = {
  ...baseColumnConfig,
  ...animationProps,
  ...radiusProps,
  ...transitionProps,
}
