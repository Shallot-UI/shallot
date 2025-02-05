import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  type ComponentType,
} from 'react'
import type { ShallotProp } from '@shallot-ui/core-theme'

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

export const withBoxLayoutProps = <T extends {}>(
  Component: ComponentType<T>,
  layoutShallot?: ShallotProp,
  boxKey?: string,
): ForwardRefExoticComponent<
  PropsWithoutRef<T & BoxLayoutProps & ExtendedProps> & RefAttributes<unknown>
> =>
  forwardRef<unknown, T & BoxLayoutProps & ExtendedProps>((props, ref) => {
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
        ...getAlignmentShallot(layoutShallot?.flexDirection, props),
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
        ...getAlignmentShallot(layoutShallot?.flexDirection, props),
        ...getBorderShallot(props),
        ...getFlexShallot(props),
        ...getMarginShallot(props),
        ...getSizingShallot(props),
        ...(shallot as ShallotProp | undefined),
      }
    }

    return (
      <Component
        {...(nonStyleProps as unknown as T)}
        shallot={extendedShallot}
        ref={ref}
      />
    )
  })
