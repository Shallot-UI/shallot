import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import {
  getColor,
  getFontSize,
  getLetterSpacing,
  getRadius,
  getFontFamily,
  getUnits,
  getVariant,
} from '@shallot-ui/core'

import { TagProps, TagShallot } from './types'

export * from './types'

export const withTagStyleProps =
  <T,>(TagComponent: ComponentType<T>) =>
  (props: TagProps<T>) => {
    const {
      // General
      color = 'Shading',
      radius = 'md',
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

      verticalUnitPadding = 1 / 2,
      horizontalUnitPadding = 1,

      shallot,
      variant = 'Default',

      ...tagProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<TagShallot>('Tag', variant)({ theme })

    let tagShallot: TagShallot = {
      Container: {
        borderRadius: getRadius(radius),
        backgroundColor: getColor(color, 100),
        borderColor: getColor(color, 100),
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

        ...(outline && {
          backgroundColor: 'transparent',
          borderColor: getColor(color, 700),
        }),

        ...themeVariant?.Container,
        ...shallot?.Container,
      },
      Title: {
        display: 'flex',
        flexGrow: 0,
        textAlign,
        fontWeight,
        fontFamily: getFontFamily(fontFamily),
        color: getColor(color, 700),
        fontSize: getFontSize(fontSize),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        letterSpacing: getLetterSpacing(letterSpacing),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),

        ...themeVariant?.Title,
        ...shallot?.Title,
      },
    }

    return <TagComponent {...(tagProps as T)} shallot={tagShallot} />
  }
