import {
  pullCasingProps,
  pullColorProps,
  pullFlexProps,
  pullFontProps,
  pullFontSizeProps,
  pullLetterSpacingProps,
  pullLineHeightProps,
  pullSizingProps,
  pullTextAlignProps,
  pullUnderlineProps,
  pullUnitsAroundProps,
} from '@shallot-ui/core'

import { TextStyleProps } from './types'

export const pullTextStyleProps = <T extends TextStyleProps>(props: T) => {
  let boxStyleProps: TextStyleProps = {}
  let restProps = { ...props }

  const actions = [
    pullCasingProps<T>,
    pullColorProps<T>,
    pullFlexProps<T>,
    pullFontProps<T>,
    pullFontSizeProps<T>,
    pullLetterSpacingProps<T>,
    pullLineHeightProps<T>,
    pullSizingProps<T>,
    pullTextAlignProps<T>,
    pullUnderlineProps<T>,
    pullUnitsAroundProps<T>,
  ]

  actions.forEach((pullAction) => {
    const [styleProps, otherProps] = pullAction(restProps)
    boxStyleProps = { ...boxStyleProps, ...styleProps }
    restProps = { ...restProps, ...otherProps }
  })

  return [boxStyleProps, restProps]
}
