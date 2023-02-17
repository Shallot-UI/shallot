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
  pullProps,
} from '@shallot-ui/core'

import { pullAnimationProps } from '../../../../props'
import { BoxStyleProps } from './types'

export const pullBoxStyleProps = <T extends BoxStyleProps>(props: T) =>
  pullProps(props, [
    pullAnimationProps,
    pullBorderProps,
    pullColorProps,
    pullCursorProps,
    pullDisplayProps,
    pullElevationProps,
    pullFlexProps,
    pullRadiusProps,
    pullSizingProps,
    pullTransitionProps,
    pullUnitsAroundProps,
  ])
