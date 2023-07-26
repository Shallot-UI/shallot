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

export type RowStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps

export type RowShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Row` component, so it can't be a mixin prop.
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
}

export type RowProps<T = {}> = T &
  RowStyleProps & {
    shallot?: RowShallot
    children: ReactNode | ReactNode[]
    variant: string
  }
