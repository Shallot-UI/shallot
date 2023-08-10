import { ComponentType } from 'react'
import { ShallotProp } from '@shallot-ui/theme'

import { AlignmentProps, getAlignmentShallot } from './alignment'
import { BorderProps, getBorderShallot } from './border'
import { FlexProps, getFlexShallot } from './flex'
import { MarginProps, getMarginShallot } from './margin'
import { SizingProps, getSizingShallot } from './sizing'

export type BoxLayoutProps = AlignmentProps &
  BorderProps &
  FlexProps &
  MarginProps &
  SizingProps

type LayoutOptions = ShallotProp & {
  // We need to force a flex direction to exist in order to apply the correct
  // alignment styles.
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

export const withBoxLayoutProps =
  <T extends { shallot?: ShallotProp }>(
    Component: ComponentType<T>,
    layoutShallot: LayoutOptions,
    boxKey?: string,
  ) =>
  (props: T & BoxLayoutProps) => {
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
