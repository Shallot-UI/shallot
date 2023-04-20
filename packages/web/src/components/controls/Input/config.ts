import {
  borderProps,
  colorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  PropsConfig,
  sizingProps,
  unitsAroundProps,
  unitsPaddingProps,
} from '@shallot-ui/core'

import {
  fontSizeProps,
  letterSpacingProps,
  lineHeightProps,
  radiusProps,
  transitionProps,
} from '../../../props'
import { InputStyleProps } from './types'

const inputConfig: PropsConfig<InputStyleProps> = {
  ...borderProps,
  ...colorProps,
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
  ...unitsPaddingProps,
}

export default inputConfig
