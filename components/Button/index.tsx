import { ComponentType, forwardRef } from 'react'
import { useTheme } from 'styled-components'
import { applyStyles } from '@shallot-ui/core-utils'
import {
  getColor,
  getRadius,
  getLetterSpacing,
  getFontSize,
  getUnits,
  getShadow,
  getFontFamily,
  getVariant,
  getGlobal,
} from '@shallot-ui/core-mixins'

import { ButtonProps, ButtonShallot } from './types'

export * from './types'

export const withButtonStyleProps = <T,>(ButtonComponent: ComponentType<T>) =>
  forwardRef<T, ButtonProps<T>>((props, ref) => {
    const {
      // General
      color = 'Default',
      radius = 'pill',
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

      verticalUnitPadding = 2 / 3,
      horizontalUnitPadding = 4 / 3,

      shallot,
      variant = 'Default',

      ...buttonProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<ButtonShallot>('Button', variant)({ theme })

    let buttonShallot: ButtonShallot = {
      Container: {
        borderRadius: getRadius(radius),
        backgroundColor:
          color === 'Default'
            ? getGlobal('foregroundColor')
            : getColor(color, 500),
        borderColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        transition: `
          background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          transform 0.2s ease-in-out
        `,

        ...(outline && { backgroundColor: 'transparent' }),
      },
      Title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign,
        fontWeight,
        flexGrow: 1,
        fontFamily: getFontFamily(fontFamily),
        color:
          color === 'Default'
            ? getGlobal('backgroundColor')
            : getColor('Shading', 50),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        letterSpacing: getLetterSpacing(letterSpacing),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),
        ...(outline && {
          color:
            color === 'Default'
              ? getGlobal('foregroundColor')
              : getColor(color, 500),
        }),
      },
      ':focus': {
        Container: {
          boxShadow: getShadow('focused'),
        },
      },
      ':hover': {
        Container: {
          backgroundColor:
            color === 'Default'
              ? getGlobal('foregroundFadeColor')
              : getColor(color, 400),
        },
      },
      ':disabled': {
        Container: { backgroundColor: getColor('Shading', 200) },
        Title: { color: getColor('Shading', 500) },
      },
    }

    buttonShallot = applyStyles(buttonShallot, themeVariant)
    buttonShallot = applyStyles(buttonShallot, shallot)

    return (
      <ButtonComponent
        {...(buttonProps as T)}
        shallot={buttonShallot}
        ref={ref}
      />
    )
  })
