import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import {
  ColorName,
  ColorShadingValue,
  ShallotProp,
  Variant,
} from '@shallot-ui/theme'
import {
  BackgroundColorProps,
  BorderColorProps,
  BorderProps,
  FlexProps,
  MarginProps,
  SizingProps,
  applyStyles,
  getBorderShallot,
  getColor,
  getColorShade,
  getShadow,
  getFlexShallot,
  getFontSize,
  getLetterSpacing,
  getMarginShallot,
  getRadius,
  getSizingShallot,
  getFontFamily,
  getUnits,
  pullFlexProps,
  pullMarginProps,
  pullSizingProps,
} from '@shallot-ui/core'

export type InputStyleProps = {
  colors?: {
    default: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
    }
    focused: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
    }
    error: {
      background: [ColorName, ColorShadingValue]
      border: [ColorName, ColorShadingValue]
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
} & MarginProps &
  SizingProps &
  FlexProps &
  BorderProps &
  BackgroundColorProps &
  BorderColorProps

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
        default: {
          background: ['Shading', 50],
          border: ['Shading', 500],
        },
        focused: {
          background: ['Shading', 50],
          border: ['Shading', 500],
        },
        error: {
          background: ['Danger', 100],
          border: ['Danger', 500],
        },
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
        ...getBorderShallot(props),
        ...getSizingShallot(props),
        ...getMarginShallot(props),
        ...getFlexShallot(props),

        backgroundColor: getColor(...colors.default?.background),
        borderColor: getColor(...colors.default?.border),

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
          backgroundColor: getColor(...colors.focused?.background),
          borderColor: getColor(...colors.focused?.border),

          // Variants (overrides)
          ...themeVariant?.state?.focused?.container,
        },
      })

    if (state.error)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor(...colors.error?.background),
          borderColor: getColor(...colors.error?.border),

          // Variants (overrides)
          ...themeVariant?.state?.error?.container,
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      input: shallot?.input,
    })

    let filteredInputProps: any = { ...inputProps }
    filteredInputProps = pullMarginProps(filteredInputProps)
    filteredInputProps = pullSizingProps(filteredInputProps)
    filteredInputProps = pullFlexProps(filteredInputProps)

    return <InputComponent {...(filteredInputProps as T)} shallot={styles} />
  }
