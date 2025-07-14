import type { DefaultTheme } from 'styled-components'
import type { ColorName, ShallotProp } from '@shallot-ui/core-theme'

type TagStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['tokens']['radii']
  letterSpacing?: keyof DefaultTheme['tokens']['letterSpacings']
  fontSize?: keyof DefaultTheme['tokens']['fontSizes']
  outline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: string
  fontFamily?: keyof DefaultTheme['tokens']['fontFamilies']
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
