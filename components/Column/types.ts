import { CSSProperties } from 'styled-components'
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

export type ColumnShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Column` component, so it can't be a mixin prop.
  flexDirection: CSSProperties['flexDirection']
}

export type ColumnStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps & { shallot?: ColumnShallot }

export type ColumnProps<T = {}> = T & ColumnStyleProps
