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

export type BoxShallot = ShallotProp & {
  // We use `flexDirection` to infer the `alignItems` and `justifyContent` props
  // for the `Box` component, so it can't be a mixin prop.
  flexDirection: CSSProperties['flexDirection']
}

export type BoxStyleProps = AlignmentProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps &
  TextColorProps &
  FlexProps &
  MarginProps &
  RadiusProps &
  SizingProps & { shallot?: BoxShallot }

export type BoxProps<T = {}> = T & BoxStyleProps
