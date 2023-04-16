import { withStyleProps } from '../../../utils'
import { StatefulSwitch } from './Components'
import { getSwitchStyles } from './getStyles'
import { SwitchProps, SwitchStyleProps } from './types'

export const Switch = withStyleProps<SwitchStyleProps, SwitchProps>(
  StatefulSwitch,
  getSwitchStyles,
)

export * from './types'
