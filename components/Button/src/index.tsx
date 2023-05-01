import { DefaultTheme } from 'styled-components'
import { applyStyles } from '@shallot-ui/core'
import { ButtonShallot, ButtonStyleProps, ButtonState } from './types'
import { Box } from '@shallot-ui/box'
import { Text } from '@shallot-ui/text'
import { HTMLAttributes } from 'react'

const getColor =
  (value: keyof DefaultTheme['colors'], shade: number) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.colors[value][shade as keyof typeof theme.colors.Shading]

const getRadius =
  (value: keyof DefaultTheme['radii']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.radii[value]

const getLetterSpacing =
  (value: keyof DefaultTheme['letterSpacings']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.letterSpacings[value]

const getLineHeight =
  (value: keyof DefaultTheme['lineHeights']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.lineHeights[value]

const getFontSize =
  (value: keyof DefaultTheme['fontSizes']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.fontSizes[value]

const getUnits =
  (value: number) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.gridUnits[0] * value

export type ButtonStyleGetter = <
  T extends ButtonStyleProps & {
    shallot: ButtonShallot
    state?: ButtonState
  },
>(
  props: T,
) => [ButtonShallot, Omit<T, 'shallot' | 'state' | keyof ButtonStyleProps>]

// TODO: Update this so that getButtonStyles returns both the styles and the
// props that should be passed to the button as separate objects.

export const getButtonStyles: ButtonStyleGetter = (props) => {
  const {
    // General
    color = 'Shading',
    radius = 'md',
    outline,

    // Typography
    // typeface = 'Body',
    // font = 'Bold',
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
    state = {},
  } = props

  // If the button uses the Shading color, we switch to the shading
  // foreground color rather than the mid-range color. This is because other
  // palette colors extend to shades darker and lighter than their foreground.
  const shades: Record<string, keyof DefaultTheme['colors']['Shading']> =
    color === 'Shading'
      ? { default: 500, hovered: 450, pressed: 500, focused: 450 }
      : { default: 300, hovered: 250, pressed: 350, focused: 300 }

  let styles: ButtonShallot = {
    container: {
      radius: getRadius(radius),
      backgroundColor: getColor(color, shades.default),
      borderColor: getColor(color, shades.default),
      borderWidth: 2,
      elevation: 'pressable',
      cursor: 'pointer',
    },
    label: {
      textAlign,
      typeface: 'Body',
      fontSize: getFontSize(fontSize),
      marginLeft: getUnits(horizontalUnitPadding),
      marginRight: getUnits(horizontalUnitPadding),
      marginTop: getUnits(verticalUnitPadding),
      marginBottom: getUnits(verticalUnitPadding),
      flexGrow: 1,
      textDecoration: underline ? 'underline' : 'none',
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: getLetterSpacing(letterSpacing),
      lineHeight: getLineHeight(fontSize),
    },
  }

  if (state.hovered)
    styles = applyStyles(styles, {
      container: {
        backgroundColor: getColor(color, shades.hovered),
        borderColor: getColor(color, shades.hovered),
        elevation: 'hover',
      },
    })

  if (state.pressed)
    styles = applyStyles(styles, {
      container: {
        backgroundColor: getColor(color, shades.pressed),
        borderColor: getColor(color, shades.pressed),
        elevation: 'pressed',
      },
    })

  if (state.focused)
    styles = applyStyles(styles, {
      container: { elevation: 'focused' },
    })

  if (outline)
    styles = applyStyles(styles, {
      container: { backgroundColor: getColor('Shading', 100) },
      label: { textColor: getColor(color, shades.default) },
    })

  styles = applyStyles(styles, {
    container: shallot?.container,
    label: shallot?.label,
  })

  return styles
}

export const Button = ({
  shallot,
  state,
  color,
  radius,
  letterSpacing,
  fontSize,
  outline,
  underline,
  uppercase,
  verticalUnitPadding,
  horizontalUnitPadding,
  textAlign,

  title,
  ...rest
}: { shallot: ButtonShallot; state?: ButtonState } & ButtonStyleProps &
  HTMLAttributes<HTMLButtonElement>) => {
  const styles = getButtonStyles({
    color,
    radius,
    letterSpacing,
    fontSize,
    outline,
    underline,
    uppercase,
    verticalUnitPadding,
    horizontalUnitPadding,
    textAlign,
    shallot,
    state,
  })

  return (
    <Box as="button" shallot={styles?.container} {...rest}>
      <Text shallot={styles?.label}>{title}</Text>
    </Box>
  )
}
