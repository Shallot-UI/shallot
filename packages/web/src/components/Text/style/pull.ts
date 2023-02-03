import {
  pullCasingProps,
  pullColorProps,
  pullFontProps,
  pullFontSizeProps,
  pullLineHeightProps,
  pullUnderlineProps,
  pullUnitsAroundProps,
  pullTextAlignProps,
  pullSizingProps,
  pullFlexProps,
  pullLetterSpacingProps,
  pullTransitionProps,
} from '@shallot-ui/core'

import { pullAnimationProps } from '../../../props'
import { TextStyleProps } from './types'

export const pullTextStyleProps = <T extends TextStyleProps>(props: T) => {
  let boxStyleProps: TextStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullAnimationProps<T>,
    pullCasingProps<T>,
    pullColorProps<T>,
    pullFontProps<T>,
    pullFontSizeProps<T>,
    pullLineHeightProps<T>,
    pullUnderlineProps<T>,
    pullUnitsAroundProps<T>,
    pullTextAlignProps<T>,
    pullSizingProps<T>,
    pullFlexProps<T>,
    pullLetterSpacingProps<T>,
    pullTransitionProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
