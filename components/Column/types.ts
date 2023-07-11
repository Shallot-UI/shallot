import {
  AlignmentProps,
  BackgroundColorProps,
  BorderColorProps,
  BorderProps,
  FlexProps,
  MarginProps,
  RadiusProps,
  ShallotProp,
  SizingProps,
  TextColorProps,
} from '@shallot-ui/core'
import { ReactNode } from 'react'

export type ColumnStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps

export type ColumnShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Column` component, so it can't be a mixin prop.
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  children: ReactNode | ReactNode[]
}

export type ColumnProps<T = {}> = T &
  ColumnStyleProps & {
    shallot?: ColumnShallot
    children: ReactNode | ReactNode[]
  }
