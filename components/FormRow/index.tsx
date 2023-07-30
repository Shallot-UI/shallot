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

export type FormRowStyleProps = {
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

export type FormRowShallot = {
  container: ShallotProp
  details: ShallotProp
  label: ShallotProp
  requiredStar: ShallotProp
  helperText: ShallotProp
  errorText: ShallotProp
}

export type FormRowProps<T> = T &
  FormRowStyleProps & {
    shallot?: FormRowShallot
    variant?: string
  }

export const withFormRowStyleProps =
  <T,>(FormRowComponent: ComponentType<T>) =>
  (props: FormRowProps<T>) => {
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
    const themeVariant = theme?.variants?.FormRow?.[variant] as
      | Variant<FormRowShallot>
      | undefined

    let modalShallot: FormRowShallot = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),

        // Variants (overrides)
        ...themeVariant?.container,
      },
      label: {
        ...getTypeface(typeface),
        lineHeight: getLineHeight('md'),
        letterSpacing: getLetterSpacing('md'),
        fontSize: getFontSize(labelFontSize || 'md'),
        color: getColorShade(labelColor || 'Shading.800'),
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.label,
      },
      details: {
        marginLeft: getUnits(1),
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        userSelect: 'none',

        // Variants (overrides)
        ...themeVariant?.details,
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
        ...getTypeface(typeface),
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
        ...getTypeface(typeface),
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

    return <FormRowComponent {...(modalProps as T)} shallot={modalShallot} />
  }
