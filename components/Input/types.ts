import type { CSSObject, DefaultTheme } from 'styled-components'
import type { ColorName, ShallotProp } from '@shallot-ui/core-theme'

type InputStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['tokens']['radii']
  fontFamily?: keyof DefaultTheme['tokens']['fontFamilies']
  letterSpacing?: keyof DefaultTheme['tokens']['letterSpacings']
  fontSize?: keyof DefaultTheme['tokens']['fontSizes']
  fontWeight?: string
  uppercase?: boolean
  textAlign?: CSSObject['textAlign']
}

export type BaseInputShallot = {
  Container?: ShallotProp
  Input?: ShallotProp
}

export type InputShallot = BaseInputShallot & {
  ':focus'?: BaseInputShallot
  ':hover'?: BaseInputShallot
  ':active'?: BaseInputShallot
  ':error'?: BaseInputShallot
}

export type InputProps<T> = T &
  InputStyleProps & {
    shallot?: InputShallot
    variant?: string
  }
