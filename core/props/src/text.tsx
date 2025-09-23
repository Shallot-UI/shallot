import {
  ComponentType,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import { ShallotProp } from '@shallot-ui/core-theme'

import { TextAlignmentProps, getTextAlignmentShallot } from './textAlignment'
import { BorderProps, getBorderShallot } from './border'
import { MarginProps, getMarginShallot } from './margin'
import { SizingProps, getSizingShallot } from './sizing'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

export type TextLayoutProps = TextAlignmentProps &
  BorderProps &
  MarginProps &
  SizingProps

export const withTextLayoutProps = <T extends {}>(
  Component: ComponentType<T>,
  layoutShallot?: ShallotProp,
): ForwardRefExoticComponent<
  PropsWithoutRef<T & ExtendedProps & TextLayoutProps> & RefAttributes<unknown>
> =>
  forwardRef<unknown, T & TextLayoutProps & ExtendedProps>((props, ref) => {
    const {
      alignTextLeft,
      alignTextCenter,
      alignTextRight,
      borderPosition,
      borderWidth,
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

    const extendedShallot = {
      ...layoutShallot,
      ...getTextAlignmentShallot(props),
      ...getBorderShallot(props),
      ...getMarginShallot(props),
      ...getSizingShallot(props),
      ...(shallot as ShallotProp | undefined),
    }

    return (
      <Component
        {...(nonStyleProps as unknown as T)}
        shallot={extendedShallot}
        ref={ref}
      />
    )
  })
