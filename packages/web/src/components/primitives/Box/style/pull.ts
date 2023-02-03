import {
  pullFlexProps,
  pullSizingProps,
  pullColorProps,
  pullUnitsAroundProps,
  pullRadiusProps,
  pullElevationProps,
  pullCursorProps,
  pullTransitionProps,
} from '@shallot-ui/core'

import { pullAnimationProps } from '../../../../props'
import { BoxStyleProps } from './types'

export const pullBoxStyleProps = <T extends BoxStyleProps>(
  props: T,
): [BoxStyleProps, Omit<T, keyof BoxStyleProps>] => {
  let boxStyleProps: BoxStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullFlexProps<T>,
    pullSizingProps<T>,
    pullColorProps<T>,
    pullUnitsAroundProps<T>,
    pullRadiusProps<T>,
    pullElevationProps<T>,
    pullCursorProps<T>,
    pullTransitionProps<T>,
    pullAnimationProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
