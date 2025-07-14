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

import { TextareaProps, TextareaShallot } from './types'

export * from './types'

export const withTextareaStyleProps =
  <T,>(TextareaComponent: ComponentType<T>) =>
  (props: TextareaProps<T>) => {
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

      ...textAreaProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<TextareaShallot>(
      'Textarea',
      variant,
    )({ theme })

    let textAreaShallot: TextareaShallot = {
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
      Textarea: {
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
        Textarea: {
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

    textAreaShallot = applyStyles(textAreaShallot, shallot)
    textAreaShallot = applyStyles(textAreaShallot, themeVariant)

    return (
      <TextareaComponent {...(textAreaProps as T)} shallot={textAreaShallot} />
    )
  }
