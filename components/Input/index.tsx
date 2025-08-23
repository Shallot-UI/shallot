import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import { applyStyles } from '@shallot-ui/core-utils'
import {
  getColor,
  getFontFamily,
  getFontSize,
  getGlobal,
  getLetterSpacing,
  getRadius,
  getShadow,
  getUnits,
  getVariant,
} from '@shallot-ui/core-mixins'

import { InputProps, InputShallot } from './types'

export * from './types'

export const withInputStyleProps =
  <T,>(InputComponent: ComponentType<T>) =>
  (props: InputProps<T>) => {
    const {
      // General
      color = 'Default',
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
        borderRadius: getRadius(String(radius)),
        backgroundColor:
          color === 'Default'
            ? getGlobal('backgroundColor')
            : getColor(String(color), 50),
        borderColor:
          color === 'Default' ? getGlobal('borderColor') : getColor(String(color), 700),
        display: 'flex',
        borderWidth: 1,
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
        fontFamily: getFontFamily(String(fontFamily)),
        color:
          color === 'Default'
            ? getGlobal('foregroundColor')
            : getColor(String(color), 900),
        fontSize: getFontSize(String(fontSize)),
        letterSpacing: getLetterSpacing(String(letterSpacing)),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),

        backgroundColor: 'transparent',
        border: 'none',
        placeholderColor: getColor('Shading', 500),
        padding: getUnits(3 / 4),
      },
      ':focus': {
        Container: {
          boxShadow: getShadow('focused'),
          borderColor:
            color === 'Default'
              ? getGlobal('foregroundColor')
              : getColor(String(color), 900),
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
