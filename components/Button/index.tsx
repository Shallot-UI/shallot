import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  getColor,
  getRadius,
  getLetterSpacing,
  getFontSize,
  getUnits,
  getShadow,
  getFontFamily,
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
      variant = 'default',

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
    const themeVariant = theme?.variants?.Button?.[variant] as
      | Variant<ButtonShallot>
      | undefined

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
        cursor: 'pointer',
        transition: `
          background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          transform 0.2s ease-in-out
        `,

        ...(outline && { backgroundColor: 'transparent' }),

        ...themeVariant?.Container,
        ...shallot?.Container,
      },
      Title: {
        display: 'block',
        textAlign,
        fontWeight,
        flex: 1,
        fontFamily: getFontFamily(fontFamily),
        color: getColor('Shading', 50),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        letterSpacing: getLetterSpacing(letterSpacing),
        cursor: 'pointer',

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),
        ...(outline && { color: getColor(color, shades.default) }),

        ...themeVariant?.Title,
        ...shallot?.Title,
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
    }

    return <ButtonComponent {...(buttonProps as T)} shallot={buttonShallot} />
  }
