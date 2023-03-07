import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  fontProps,
  fontSizeProps,
  letterSpacingProps,
  lineHeightProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  unitsAroundProps,
  unitsPaddingProps,
} from '@shallot-ui/core'

import { transitionProps } from '../../../../props'
import { FormCheckboxStyleProps } from '../styles/types'

const formCheckboxConfig: PropsConfig<FormCheckboxStyleProps> = {
  ...borderProps,
  ...colorProps,
  ...cursorProps,
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

export default formCheckboxConfig
