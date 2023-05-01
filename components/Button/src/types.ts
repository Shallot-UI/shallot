import { ShallotProp } from '@shallot-ui/core'
import { ColorName } from '@shallot-ui/theme'
import { CSSObject, DefaultTheme } from 'styled-components'

export type ButtonShallot = {
  container: ShallotProp<CSSObject>
  label: ShallotProp<CSSObject>
}

export type ButtonStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  underline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
}

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type ButtonStyleGetter = (
  props: ButtonStyleProps & {
    shallot: ButtonShallot
    state?: ButtonState
  },
  state?: ButtonState,
) => ButtonShallot
