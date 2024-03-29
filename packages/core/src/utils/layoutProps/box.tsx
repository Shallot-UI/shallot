import { ComponentType } from 'react'
import { ShallotProp } from '@shallot-ui/theme'

import { AlignmentProps, getAlignmentShallot } from './alignment'
import { BorderProps, getBorderShallot } from './border'
import { FlexProps, getFlexShallot } from './flex'
import { MarginProps, getMarginShallot } from './margin'
import { SizingProps, getSizingShallot } from './sizing'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

export type BoxLayoutProps = AlignmentProps &
  BorderProps &
  FlexProps &
  MarginProps &
  SizingProps

export type LayoutShallot = ShallotProp & {
  // We need to force a flex direction to exist in order to apply the correct
  // alignment styles.
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

export const withBoxLayoutProps =
  <T extends {}>(
    Component: ComponentType<T>,
    layoutShallot: LayoutShallot,
    boxKey?: string,
  ) =>
  (props: T & BoxLayoutProps & ExtendedProps) => {
    const {
      alignTop,
      alignMiddle,
      alignBottom,
      alignLeft,
      alignCenter,
      alignRight,
      borderPosition,
      borderWidth,
      grow,
      shrink,
      flex,
      wrap,
      unitGap,
      unitFlexBasis,
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

    let extendedShallot: ShallotProp | Record<string, ShallotProp> = {
      ...shallot,
    }

    if (boxKey) {
      ;(extendedShallot as Record<string, ShallotProp>)[boxKey] = {
        display: 'flex',
        ...layoutShallot,
        ...getAlignmentShallot(layoutShallot.flexDirection, props),
        ...getBorderShallot(props),
        ...getFlexShallot(props),
        ...getMarginShallot(props),
        ...getSizingShallot(props),
        ...(shallot?.[boxKey] as ShallotProp | undefined),
      }
    } else {
      ;(extendedShallot as ShallotProp) = {
        display: 'flex',
        ...layoutShallot,
        ...getAlignmentShallot(layoutShallot.flexDirection, props),
        ...getBorderShallot(props),
        ...getFlexShallot(props),
        ...getMarginShallot(props),
        ...getSizingShallot(props),
        ...(shallot as ShallotProp | undefined),
      }
    }

    return <Component {...(nonStyleProps as T)} shallot={extendedShallot} />
  }
