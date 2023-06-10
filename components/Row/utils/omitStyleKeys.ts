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
import { RowProps } from '../types'

const omitStyleKeys = <T>(props: RowProps<T>) =>
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
  ) as T

export default omitStyleKeys
