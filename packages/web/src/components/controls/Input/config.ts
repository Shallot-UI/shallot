import {
  borderProps,
  colorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  fontSizeProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  unitsAroundProps,
  unitsPaddingProps,
} from '@shallot-ui/core'

import {
  letterSpacingProps,
  lineHeightProps,
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
