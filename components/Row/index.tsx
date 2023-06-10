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

import { RowProps, RowShallot, RowStyleProps } from './types'
export * from './types'

export const withRowStyleProps = <T,>(
  RowComponent: ComponentType<T & RowStyleProps>,
) =>
  forwardRef<HTMLDivElement, RowProps<T>>((props: RowProps<T>, ref) => {
    const baseShallot: RowShallot = applyStyles({
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

    return <RowComponent {...baseProps} ref={ref} shallot={shallot} />
  })
