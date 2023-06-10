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
import { ColumnProps } from '../types'

const omitStyleKeys = <T>(props: ColumnProps<T>) =>
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
