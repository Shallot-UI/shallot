import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp, Variant } from '@shallot-ui/theme'
import {
  getColor,
  getFontSize,
  getLetterSpacing,
  getRadius,
  getFontFamily,
  getUnits,
} from '@shallot-ui/core'

type TagStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  letterSpacing?: keyof DefaultTheme['letterSpacings']
  fontSize?: keyof DefaultTheme['fontSizes']
  outline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  textAlign?: CSSObject['textAlign']
  fontFamily?: keyof DefaultTheme['fontFamilies']
  fontWeight?: string
}

type BaseTagShallot = {
  Container?: ShallotProp
  Title?: ShallotProp
}

export type TagShallot = BaseTagShallot & {
  ':focus'?: BaseTagShallot
  ':hover'?: BaseTagShallot
  ':active'?: BaseTagShallot
}

export type TagProps<T> = T &
  TagStyleProps & {
    shallot?: TagShallot
    variant?: string
  }

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
      variant = 'default',

      ...tagProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Tag?.[variant] as
      | Variant<TagShallot>
      | undefined

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
