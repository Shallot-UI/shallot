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

export type RowShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Row` component, so it can't be a mixin prop.
  flexDirection: CSSProperties['flexDirection']
}

export type RowStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps & { shallot?: RowShallot }

export type RowProps<T = {}> = T & RowStyleProps
