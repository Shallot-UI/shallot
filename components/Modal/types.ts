import type { DefaultTheme } from 'styled-components'
import type { ColorShade, ShallotProp } from '@repo/theme'

export type ModalStyleProps = {
  backgroundColor?: ColorShade
  radius?: keyof DefaultTheme['radii']
  unitHeight?: number
  unitWidth?: number
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

export type ModalShallot = {
  Wrapper: ShallotProp
  Curtain: ShallotProp
  Container: ShallotProp
}

export type ModalProps<T> = T &
  ModalStyleProps & {
    shallot?: ModalShallot
    variant?: string
  }
