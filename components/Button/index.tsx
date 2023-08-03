import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getRadius,
  getLetterSpacing,
  getLineHeight,
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
  underline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
  unitHeight?: number
  unitWidth?: number
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
  fontFamily?: string
  font?: string
}

export type ButtonShallot = {
  container: ShallotProp
  title: ShallotProp
}

export type ButtonState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export type ButtonProps<T> = T &
  ButtonStyleProps & {
    shallot?: ButtonShallot
    state?: ButtonState
    disabled?: boolean
    variant?: string
  }

export type ButtonVariant = ButtonShallot & {
  state?: { [Key in keyof ButtonState]: ButtonShallot }
  outline?: ButtonShallot
}

export const withButtonStyleProps =
  <T,>(ButtonComponent: ComponentType<T>) =>
  (props: ButtonProps<T>) => {
    const {
      // General
      color = 'Shading',
      radius = 'md',
      outline,

      unitHeight,
      unitWidth,

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      // Typography
      fontFamily = 'Body',
      font = 'Bold',
      letterSpacing = 'md',
      fontSize = 'md',

      // Casing
      uppercase,

      // Text Alignment
      textAlign = 'center',

      verticalUnitPadding = 1,
      horizontalUnitPadding = 2,

      // Underline
      underline,

      shallot,
      variant = 'default',
      state = {},

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
      container: {
        ...getShadow('pressable'),
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
        // Units
        ...(unitHeight && { height: getUnits(unitHeight) }),
        ...(unitWidth && { width: getUnits(unitWidth) }),
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),

        // Variants (overrides)
        ...themeVariant?.container,
      },
      title: {
        display: 'block',
        textAlign,
        flex: 1,
        fontFamily: getFontFamily(fontFamily),
        color: getColor('Shading', 50),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        textDecoration: underline ? 'underline' : 'none',
        textTransform: uppercase ? 'uppercase' : 'none',
        letterSpacing: getLetterSpacing(letterSpacing),
        lineHeight: getLineHeight(fontSize),
        cursor: 'pointer',

        // Variants (overrides)
        ...themeVariant?.title,
      },
    }

    if (state.hovered)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          ...getShadow('hover'),
          backgroundColor: getColor(color, shades.hovered),
          borderColor: getColor(color, shades.hovered),

          // Variants (overrides)
          ...themeVariant?.state?.hovered?.container,
        },
      })

    if (state.pressed)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          ...getShadow('pressed'),
          backgroundColor: getColor(color, shades.pressed),
          borderColor: getColor(color, shades.pressed),

          // Variants (overrides)
          ...themeVariant?.state?.pressed?.container,
        },
      })

    if (state.focused)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          ...getShadow('focused'),

          // Variants (overrides)
          ...themeVariant?.state?.pressed?.container,
        },
      })

    if (outline)
      buttonShallot = applyStyles(buttonShallot, {
        container: {
          backgroundColor: getColor('Shading', 100),
        },
        title: {
          color: getColor(color, shades.default),
        },
      })

    buttonShallot = applyStyles(buttonShallot, {
      container: shallot?.container,
      title: shallot?.title,
    })

    return <ButtonComponent {...(buttonProps as T)} shallot={buttonShallot} />
  }
