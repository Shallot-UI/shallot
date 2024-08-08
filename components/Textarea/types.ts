import type { CSSObject, DefaultTheme } from 'styled-components'
import type { ColorName, ShallotProp } from '@shallot-ui/core-theme'

type TextareaStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['tokens']['radii']
  fontFamily?: keyof DefaultTheme['tokens']['fontFamilies']
  letterSpacing?: keyof DefaultTheme['tokens']['letterSpacings']
  fontSize?: keyof DefaultTheme['tokens']['fontSizes']
  fontWeight?: string
  uppercase?: boolean
  textAlign?: CSSObject['textAlign']
}

export type BaseTextareaShallot = {
  Container?: ShallotProp
  Textarea?: ShallotProp
}

export type TextareaShallot = BaseTextareaShallot & {
  ':focus'?: BaseTextareaShallot
  ':hover'?: BaseTextareaShallot
  ':active'?: BaseTextareaShallot
  ':error'?: BaseTextareaShallot
}

export type TextareaProps<T> = T &
  TextareaStyleProps & {
    shallot?: TextareaShallot
    variant?: string
  }
