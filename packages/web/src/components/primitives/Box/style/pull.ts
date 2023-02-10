import {
  pullFlexProps,
  pullSizingProps,
  pullColorProps,
  pullUnitsAroundProps,
  pullRadiusProps,
  pullElevationProps,
  pullCursorProps,
  pullTransitionProps,
  pullDisplayProps,
  pullBorderProps,
} from '@shallot-ui/core'

import { pullAnimationProps } from '../../../../props'
import { BoxStyleProps } from './types'

export const pullBoxStyleProps = <T extends BoxStyleProps>(
  props: T,
): [BoxStyleProps, Omit<T, keyof BoxStyleProps>] => {
  let boxStyleProps: BoxStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullAnimationProps<T>,
    pullBorderProps<T>,
    pullColorProps<T>,
    pullCursorProps<T>,
    pullDisplayProps<T>,
    pullElevationProps<T>,
    pullFlexProps<T>,
    pullRadiusProps<T>,
    pullSizingProps<T>,
    pullTransitionProps<T>,
    pullUnitsAroundProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
