import { ComponentType } from 'react'
import { ShallotProp } from '@shallot-ui/theme'

import { TextAlignmentProps, getTextAlignmentShallot } from './textAlignment'
import { BorderProps, getBorderShallot } from './border'
import { FlexProps, getFlexShallot } from './flex'
import { MarginProps, getMarginShallot } from './margin'
import { SizingProps, getSizingShallot } from './sizing'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

export type TextLayoutProps = TextAlignmentProps &
  BorderProps &
  FlexProps &
  MarginProps &
  SizingProps

export const withTextLayoutProps =
  <T extends {}>(Component: ComponentType<T>, layoutShallot?: ShallotProp) =>
  (props: T & ExtendedProps & TextLayoutProps) => {
    const {
      alignTextLeft,
      alignTextCenter,
      alignTextRight,
      borderPosition,
      borderWidth,
      grow,
      shrink,
      flex,
      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,
      unitHeight,
      unitWidth,
      maxUnitHeight,
      maxUnitWidth,
      minUnitHeight,
      minUnitWidth,
      fullWidth,
      fullHeight,
      shallot,
      ...nonStyleProps
    } = props

    const nextProps = {
      ...nonStyleProps,
      shallot: {
        display: 'flex',
        ...layoutShallot,
        ...getTextAlignmentShallot(props),
        ...getBorderShallot(props),
        ...getFlexShallot(props),
        ...getMarginShallot(props),
        ...getSizingShallot(props),
        ...shallot,
      },
    } as T

    return <Component {...nextProps} />
  }
