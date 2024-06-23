import { ColorName, ShallotProp } from '@shallot-ui/core-theme'

export type SwitchStyleProps = {
  color?: ColorName
  unitSize?: number
}

export type BaseSwitchShallot = {
  Container?: ShallotProp
  Handle?: ShallotProp
}

export type SwitchShallot = BaseSwitchShallot & {
  ':focus'?: BaseSwitchShallot
  ':hover'?: BaseSwitchShallot
  ':checked'?: BaseSwitchShallot
}

export type SwitchProps<T> = T &
  SwitchStyleProps & {
    shallot?: SwitchShallot
    variant?: string
    inverted?: boolean
  }
