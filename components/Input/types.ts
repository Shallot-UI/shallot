import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/theme'

type InputStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  fontFamily?: keyof DefaultTheme['fontFamilies']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
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
