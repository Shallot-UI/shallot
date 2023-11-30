import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/theme'
import {
  getColor,
  getRadius,
  getLetterSpacing,
  getFontSize,
  getUnits,
  getShadow,
  getFontFamily,
  applyStyles,
  getVariant,
} from '@shallot-ui/core'

export type ButtonStyleProps = {
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

type BaseButtonShallot = {
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

export const withButtonStyleProps =
  <T,>(ButtonComponent: ComponentType<T>) =>
  (props: ButtonProps<T>) => {
    const {
      // General
      color = 'Shading',
      radius = 'md',
      outline,

      // Typography
      fontFamily = 'Body',
      letterSpacing = 'md',
      fontSize = 'md',
      fontWeight = 'bold',

      // Casing
      uppercase,

      // Text Alignment
      textAlign = 'center',

      verticalUnitPadding = 1,
      horizontalUnitPadding = 2,

      shallot,
      variant = 'Default',

      ...buttonProps
    } = props

    // If the button uses the Shading color, we switch to the shading
    // foreground color rather than the mid-range color. This is because other
    // palette colors extend to shades darker and lighter than their foreground.
    const shades: Record<string, keyof DefaultTheme['colors']['Shading']> =
      color === 'Shading'
        ? { default: 900, hovered: 800, pressed: 950, focused: 900 }
        : { default: 500, hovered: 400, pressed: 600, focused: 500 }

    const theme = useTheme()
    const themeVariant = getVariant<ButtonShallot>('Button', variant)({ theme })

    let buttonShallot: ButtonShallot = {
      Container: {
        boxShadow: getShadow(100),
        borderRadius: getRadius(radius),
        backgroundColor: getColor(color, shades.default),
        borderColor: getColor(color, shades.default),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        transition: `
          background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          transform 0.2s ease-in-out
        `,

        ...(outline && { backgroundColor: 'transparent' }),
      },
      Title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign,
        fontWeight,
        flexGrow: 1,
        fontFamily: getFontFamily(fontFamily),
        color: getColor('Shading', 50),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        letterSpacing: getLetterSpacing(letterSpacing),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),
        ...(outline && { color: getColor(color, shades.default) }),
      },
      ':focus': {
        Container: {
          boxShadow: getShadow('focused'),
        },
      },
      ':hover': {
        Container: {
          boxShadow: getShadow(300),
          backgroundColor: getColor(color, shades.hovered),
          borderColor: getColor(color, shades.hovered),
        },
      },
      ':active': {
        Container: {
          boxShadow: getShadow(100),
          backgroundColor: getColor(color, shades.pressed),
          borderColor: getColor(color, shades.pressed),
        },
      },
      ':disabled': {
        Container: {
          boxShadow: 'none',
          backgroundColor: getColor('Shading', 200),
          borderColor: getColor('Shading', 100),
        },
        Title: {
          color: getColor('Shading', 500),
        },
      },
    }

    buttonShallot = applyStyles(buttonShallot, themeVariant)
    buttonShallot = applyStyles(buttonShallot, shallot)

    return <ButtonComponent {...(buttonProps as T)} shallot={buttonShallot} />
  }
