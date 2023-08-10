import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { AllColorShades, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  applyStyles,
  getColorShade,
  getFontFamily,
  getFontSize,
  getLetterSpacing,
  getRadius,
  getShadow,
  getUnits,
} from '@shallot-ui/core'

export type InputStyleProps = {
  colors?: {
    default: {
      background: AllColorShades
      border: AllColorShades
    }
    focused: {
      background: AllColorShades
      border: AllColorShades
    }
    error: {
      background: AllColorShades
      border: AllColorShades
    }
  }
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  underline?: boolean
  uppercase?: boolean
  fontFamily?: keyof DefaultTheme['fontFamilies']
  font?: string
}

export type InputShallot = {
  container: ShallotProp
  input: ShallotProp
}

export type InputState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
  error?: boolean
}

export type InputProps<T> = T & {
  shallot?: InputShallot
  state?: InputState
  variant?: string
}

export const withInputStyleProps =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T> & InputStyleProps) => {
    const {
      // General
      radius = 'md',

      // Colors
      colors = {
        default: { background: 'Shading.50', border: 'Shading.500' },
        focused: { background: 'Shading.50', border: 'Shading.500' },
        error: { background: 'Danger.100', border: 'Danger.500' },
      },

      // Typography
      fontFamily = 'Body',
      font = 'Regular',
      letterSpacing = 'md',
      fontSize = 'md',
      uppercase,
      underline,

      shallot,
      state = {},
      variant = 'default',

      ...inputProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Input?.[variant] as
      | Variant<InputShallot>
      | undefined

    let styles: InputShallot = {
      container: {
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        borderRadius: getRadius(radius),
        cursor: 'text',
        transition: `
          border-color 0.2s ease-in-out,
          background-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out
        `,
        ...(colors.default?.background && {
          backgroundColor: getColorShade(colors.default.background),
        }),
        ...(colors.default?.border && {
          borderColor: getColorShade(colors.default.border),
        }),

        // Variants (overrides)
        ...themeVariant?.container,
      },
      input: {
        fontFamily: getFontFamily(fontFamily),
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'transparent',
        color: getColorShade('Shading.900'),
        placeholderColor: getColorShade('Shading.500'),
        fontSize: getFontSize('md'),
        margin: getUnits(3 / 4),
        letterSpacing: getLetterSpacing('md'),

        // Variants (overrides)
        ...themeVariant?.input,
      },
    }

    if (state.focused)
      styles = applyStyles(styles, {
        container: {
          boxShadow: getShadow('focused'),
          ...(colors.focused?.background && {
            backgroundColor: getColorShade(colors.focused.background),
          }),
          ...(colors.focused?.border && {
            borderColor: getColorShade(colors.focused.border),
          }),

          // Variants (overrides)
          ...themeVariant?.state?.focused?.container,
        },
      })

    if (state.error)
      styles = applyStyles(styles, {
        container: {
          ...(colors.error?.background && {
            backgroundColor: getColorShade(colors.error.background),
          }),
          ...(colors.error?.border && {
            borderColor: getColorShade(colors.error.border),
          }),

          // Variants (overrides)
          ...themeVariant?.state?.error?.container,
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      input: shallot?.input,
    })

    return <InputComponent {...(inputProps as T)} shallot={styles} />
  }
