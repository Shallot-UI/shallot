import {
  AlignmentProps,
  BackgroundColorProps,
  BorderColorProps,
  BorderProps,
  FlexProps,
  MarginProps,
  RadiusProps,
  SizingProps,
  TextColorProps,
} from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'
import { ReactNode } from 'react'

export type BoxShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Box` component, so it can't be a mixin prop.
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
}

export type BoxStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps

export type BoxProps<T = {}> = T &
  BoxStyleProps & {
    shallot?: BoxShallot
    // variant?: string
    children: ReactNode | ReactNode[]
  }
