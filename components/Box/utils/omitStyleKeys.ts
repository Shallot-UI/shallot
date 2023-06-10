import { omit } from 'lodash'
import {
  alignmentPropKeys,
  backgroundColorPropKeys,
  borderColorPropKeys,
  borderPropKeys,
  flexPropKeys,
  marginPropKeys,
  radiusPropKeys,
  sizingPropKeys,
  textColorPropKeys,
} from '@shallot-ui/core'

import { BoxProps, BoxStyleProps } from '../types'

const omitStyleKeys = <T>(props: BoxProps<T>) =>
  omit(
    props,
    ...alignmentPropKeys,
    ...borderPropKeys,
    ...backgroundColorPropKeys,
    ...borderColorPropKeys,
    ...textColorPropKeys,
    ...flexPropKeys,
    ...marginPropKeys,
    ...radiusPropKeys,
    ...sizingPropKeys,
  ) as Omit<T, keyof BoxStyleProps>

export default omitStyleKeys
