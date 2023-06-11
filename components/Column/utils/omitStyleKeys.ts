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

const omitStyleKeys = <T>(props: ColumnProps<T>) => {
  const baseProps = {} as T
  const stylePropKeys = [
    ...alignmentPropKeys,
    ...borderPropKeys,
    ...backgroundColorPropKeys,
    ...borderColorPropKeys,
    ...textColorPropKeys,
    ...flexPropKeys,
    ...marginPropKeys,
    ...radiusPropKeys,
    ...sizingPropKeys,
  ]

  Object.keys(props).forEach((key) => {
    if (!(stylePropKeys as string[]).includes(key)) {
      baseProps[key as keyof T] = props[key as keyof T]
    }
  })

  return baseProps
}

export default omitStyleKeys
