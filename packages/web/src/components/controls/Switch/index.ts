import { withStyleProps } from '@shallot-ui/next'

import { StatefulSwitch } from './Components'
import { getSwitchStyles } from './getStyles'

export const Switch = withStyleProps(StatefulSwitch, getSwitchStyles)

export * from './types'
