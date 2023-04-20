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

import { fontSizeProps, radiusProps } from '../../../props'
import { InputStyleProps } from './types'

const inputConfig: PropsConfig<InputStyleProps> = {
  ...borderProps,
  ...colorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...fontProps,
  ...fontSizeProps,
  ...radiusProps,
  ...sizingProps,
  ...unitsAroundProps,
  ...unitsPaddingProps,
}

export default inputConfig
