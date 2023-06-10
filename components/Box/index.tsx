import { ComponentType, forwardRef } from 'react'
import { omit } from 'lodash'
import {
  alignmentPropKeys,
  applyStyles,
  backgroundColorPropKeys,
  borderColorPropKeys,
  borderPropKeys,
  flexPropKeys,
  getAlignmentShallot,
  getBackgroundColorShallot,
  getBorderColorShallot,
  getBorderShallot,
  getFlexShallot,
  getMarginShallot,
  getRadiusShallot,
  getSizingShallot,
  getTextColorShallot,
  marginPropKeys,
  radiusPropKeys,
  sizingPropKeys,
  textColorPropKeys,
} from '@shallot-ui/core'

import { BoxProps, BoxShallot, BoxStyleProps } from './types'
export * from './types'

export const withBoxStyleProps = <T,>(
  BoxComponent: ComponentType<T & BoxStyleProps>,
) =>
  forwardRef<HTMLDivElement, BoxProps<T>>((props: BoxProps<T>, ref) => {
    const baseShallot: BoxShallot = applyStyles({
      display: 'flex',
      flexDirection: 'column',
      ...props.shallot,
    })

    const shallot = applyStyles(baseShallot, {
      ...getAlignmentShallot(baseShallot.flexDirection, props),
      ...getBorderShallot(props),
      ...getBackgroundColorShallot(props),
      ...getBorderColorShallot(props),
      ...getTextColorShallot(props),
      ...getFlexShallot(props),
      ...getMarginShallot(props),
      ...getRadiusShallot(props),
      ...getSizingShallot(props),
    })

    const baseProps = omit(
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

    return <BoxComponent {...baseProps} ref={ref} shallot={shallot} />
  })
