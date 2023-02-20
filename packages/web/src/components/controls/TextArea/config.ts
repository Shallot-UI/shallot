import {
  borderProps,
  colorProps,
  cursorProps,
  displayProps,
  elevationProps,
  flexProps,
  PropsConfig,
  radiusProps,
  sizingProps,
  transitionProps,
  unitsAroundProps,
} from '@shallot-ui/core'

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
