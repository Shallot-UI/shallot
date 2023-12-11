import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/theme'

type TagStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
  fontFamily?: keyof DefaultTheme['fontFamilies']
  fontWeight?: string
}

export type BaseTagShallot = {
  Container?: ShallotProp
  Title?: ShallotProp
}

export type TagShallot = BaseTagShallot & {
  ':focus'?: BaseTagShallot
  ':hover'?: BaseTagShallot
  ':active'?: BaseTagShallot
}

export type TagProps<T> = T &
  TagStyleProps & {
    shallot?: TagShallot
    variant?: string
  }
