import { withStyleProps } from '../../../utils'
import { StatefulSwitch } from './Components'
import { getSwitchStyles } from './getStyles'

export const Switch = withStyleProps(StatefulSwitch, getSwitchStyles)

export * from './types'
