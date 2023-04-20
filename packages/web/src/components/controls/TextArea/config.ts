import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  PropsConfig,
  sizingProps,
  unitsAroundProps,
} from '@shallot-ui/core'

import { transitionProps, radiusProps } from '../../../props'
import { TextAreaProps } from './types'

export const textAreaConfig: PropsConfig<TextAreaProps> = {
  ...borderProps,
  ...colorProps,
  ...cursorProps,
  ...displayProps,
  ...elevationProps,
  ...flexProps,
  ...radiusProps,
  ...sizingProps,
  ...transitionProps,
  ...unitsAroundProps,
}
