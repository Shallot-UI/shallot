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
  getGlobal,
} from '@shallot-ui/core-mixins'

import { TagProps, TagShallot } from './types'

export * from './types'

export const withTagStyleProps =
  <T,>(TagComponent: ComponentType<T>) =>
  (props: TagProps<T>) => {
    const {
      // General
      color = 'Default',
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

      verticalUnitPadding = 1 / 3,
      horizontalUnitPadding = 2 / 3,

      shallot,
      variant = 'Default',

      ...tagProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<TagShallot>('Tag', variant)({ theme })

    let tagShallot: TagShallot = {
      Container: {
        borderRadius: getRadius(String(radius)),
        backgroundColor:
          color === 'Default'
            ? getGlobal('backgroundFadeColor')
            : getColor(String(color), 100),
        borderColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'solid',

        ...(outline && {
          backgroundColor: 'transparent',
          borderColor:
            color === 'Default'
              ? getGlobal('foregroundFadeColor')
              : getColor(String(color), 700),
        }),

        ...themeVariant?.Container,
        ...shallot?.Container,
      },
      Title: {
        display: 'flex',
        flexGrow: 0,
        textAlign,
        fontWeight,
        fontFamily: getFontFamily(String(fontFamily)),
        color:
          color === 'Default'
            ? getGlobal('foregroundFadeColor')
            : getColor(String(color), 700),
        fontSize: getFontSize(String(fontSize)),
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        letterSpacing: getLetterSpacing(String(letterSpacing)),

        ...(uppercase && { textTransform: uppercase ? 'uppercase' : 'none' }),

        ...themeVariant?.Title,
        ...shallot?.Title,
      },
    }

    return <TagComponent {...(tagProps as T)} shallot={tagShallot} />
  }
