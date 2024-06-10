import type { CSSObject, DefaultTheme } from 'styled-components'
import type { ColorName, ShallotProp, Theme } from '@shallot-ui/core-theme'

export type ButtonStyleProps = {
  color?: ColorName
  radius?: keyof Theme['radii']
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

export type BaseButtonShallot = {
  Container?: ShallotProp
  Title?: ShallotProp
}

export type ButtonShallot = BaseButtonShallot & {
  ':focus'?: BaseButtonShallot
  ':hover'?: BaseButtonShallot
  ':active'?: BaseButtonShallot
  ':disabled'?: BaseButtonShallot
}

export type ButtonProps<T> = T &
  ButtonStyleProps & {
    shallot?: ButtonShallot
    disabled?: boolean
    variant?: string
  }
