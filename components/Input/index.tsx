import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getFontFamily,
  getFontSize,
  getLetterSpacing,
  getRadius,
  getShadow,
  getUnits,
  getVariant,
} from '@shallot-ui/core'

type InputStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  fontFamily?: keyof DefaultTheme['fontFamilies']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  fontWeight?: string
  uppercase?: boolean
  textAlign?: CSSObject['textAlign']
}

export type BaseInputShallot = {
  Container?: ShallotProp
  Input?: ShallotProp
}

export type InputShallot = BaseInputShallot & {
  ':focus'?: BaseInputShallot
  ':hover'?: BaseInputShallot
  ':active'?: BaseInputShallot
  ':error'?: BaseInputShallot
}

export type InputProps<T> = T &
  InputStyleProps & {
    shallot?: InputShallot
    variant?: string
  }

export const withInputStyleProps =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T>) => {
    const {
      // General
      color = 'Shading',
      radius = 'md',

      // Typography
      fontFamily = 'Body',
      letterSpacing = 'md',
      fontSize = 'md',
      fontWeight = 'bold',

      // Casing
      uppercase,

      // Text Alignment
      textAlign = 'center',

      shallot,
      variant = 'Default',

      ...inputProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<InputShallot>('Input', variant)({ theme })

    let inputShallot: InputShallot = {
      Container: {
        borderRadius: getRadius(radius),
        backgroundColor: getColor(color, 50),
        borderColor: getColor(color, 700),
        display: 'flex',
        borderWidth: 2,
        borderStyle: 'solid',
        cursor: 'text',
        transition: `
            border-color 0.2s ease-in-out,
            background-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out
          `,
      },
      Input: {
        display: 'flex',
        flexGrow: 1,
        fontFamily: getFontFamily(fontFamily),
        color: getColor(color, 900),
        fontSize: getFontSize(fontSize),
        letterSpacing: getLetterSpacing(letterSpacing),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),

        backgroundColor: 'transparent',
        border: 'none',
        placeholderColor: getColor('Shading', 500),
        padding: getUnits(3 / 4),
      },
      ':focus': {
        Container: {
          boxShadow: getShadow('focused'),
          borderColor: getColor(color, 900),
        },
        Input: {
          outline: 'none',
        },
      },
      ':error': {
        Container: {
          borderColor: getColor('Danger', 700),
          color: getColor('Danger', 700),
        },
      },
    }

    inputShallot = applyStyles(inputShallot, shallot)
    inputShallot = applyStyles(inputShallot, themeVariant)

    return <InputComponent {...(inputProps as T)} shallot={inputShallot} />
  }
