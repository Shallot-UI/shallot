import {
  pullFlexProps,
  pullSizingProps,
  pullColorProps,
  pullUnitsAroundProps,
  pullRadiusProps,
  pullElevationProps,
} from '@shallot-ui/core'

import { BoxStyleProps } from './types'

export const pullBoxStyleProps = <T extends BoxStyleProps>(
  props: T,
): [BoxStyleProps, Omit<T, keyof BoxStyleProps>] => {
  let boxStyleProps: BoxStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullColorProps<T>,
    pullElevationProps<T>,
    pullFlexProps<T>,
    pullRadiusProps<T>,
    pullSizingProps<T>,
    pullUnitsAroundProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
