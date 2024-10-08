import { DefaultTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/core-theme'

export type CheckboxStyleProps = {
  color?: ColorName
  size?: number
  iconSize?: number
  radius?: keyof DefaultTheme['tokens']['radii']
}

export type BaseCheckboxShallot = {
  Container?: ShallotProp
  Icon?: ShallotProp
}

export type CheckboxShallot = BaseCheckboxShallot & {
  ':focus'?: BaseCheckboxShallot
  ':hover'?: BaseCheckboxShallot
  ':checked'?: BaseCheckboxShallot
  ':disabled'?: BaseCheckboxShallot
}

export type CheckboxProps<T> = T &
  CheckboxStyleProps & {
    shallot?: CheckboxShallot
    variant?: string
  }
