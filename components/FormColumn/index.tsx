import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { AllColorShades, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  applyStyles,
  getUnits,
  getColorShade,
  getTypeface,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
} from '@shallot-ui/core'

export type FormColumnStyleProps = {
  radius?: keyof DefaultTheme['radii']
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number

  labelFontSize?: keyof DefaultTheme['fontSizes']
  labelColor?: AllColorShades

  typeface?: keyof DefaultTheme['typefaces']
}

export type FormColumnShallot = {
  container: ShallotProp
  label: ShallotProp
  requiredStar: ShallotProp
  helperText: ShallotProp
  errorText: ShallotProp
}

export type FormColumnProps<T> = T &
  FormColumnStyleProps & {
    shallot?: FormColumnShallot
    variant?: string
  }

export const withFormColumnStyleProps =
  <T,>(FormColumnComponent: ComponentType<T>) =>
  (props: FormColumnProps<T>) => {
    const {
      // General
      radius = 'md',

      typeface = 'Body',
      labelFontSize,
      labelColor,

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      shallot,

      variant = 'default',

      ...modalProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.FormColumn?.[variant] as
      | Variant<FormColumnShallot>
      | undefined

    let modalShallot: FormColumnShallot = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),

        // Variants (overrides)
        ...themeVariant?.container,
      },
      label: {
        typeface: getTypeface(typeface),
        lineHeight: getLineHeight('md'),
        letterSpacing: getLetterSpacing('md'),
        fontSize: getFontSize(labelFontSize || 'md'),
        color: getColorShade(labelColor || 'Shading.800'),
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.label,
      },
      requiredStar: {
        color: getColorShade('Danger.500'),
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.requiredStar,
      },
      helperText: {
        fontSize: getFontSize('sm'),
        letterSpacing: getLetterSpacing('md'),
        color: getColorShade('Shading.600'),
        unitsAbove: getUnits(1 / 4),
        transition: 'color 350ms ease-in-out',
        animation: 'fadeInDown',
        typeface: getTypeface(typeface),
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.helperText,
      },
      errorText: {
        fontSize: getFontSize('sm'),
        letterSpacing: getLetterSpacing('md'),
        color: getColorShade('Danger.600'),
        unitsAbove: getUnits(1 / 4),
        animation: 'fadeInDown',
        typeface: getTypeface(typeface),
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.errorText,
      },
    }

    modalShallot = applyStyles(modalShallot, {
      container: shallot?.container,
      label: shallot?.label,
      requiredStar: shallot?.requiredStar,
      helperText: shallot?.helperText,
      errorText: shallot?.errorText,
    })

    return <FormColumnComponent {...(modalProps as T)} shallot={modalShallot} />
  }
