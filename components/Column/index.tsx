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

import { ColumnProps, ColumnShallot, ColumnStyleProps } from './types'
export * from './types'

export const withColumnStyleProps = <T,>(
  ColumnComponent: ComponentType<T & ColumnStyleProps>,
) =>
  forwardRef<HTMLDivElement, ColumnProps<T>>((props: ColumnProps<T>, ref) => {
    const baseShallot: ColumnShallot = applyStyles({
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

    return <ColumnComponent {...baseProps} ref={ref} shallot={shallot} />
  })
