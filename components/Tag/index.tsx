import { ComponentType } from 'react'
import { CSSObject, DefaultTheme, useTheme } from 'styled-components'
import { ColorName, ShallotProp } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
  getRadius,
  getTypeface,
  getUnits,
} from '@shallot-ui/core'

export type TagStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  outline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
  typeface?: keyof DefaultTheme['typefaces']
  font?: string
  letterSpacing?: keyof DefaultTheme['letterSpacings']
}

export type TagShallot = {
  container: ShallotProp
  title: ShallotProp
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
      // animation,
      outline,
      typeface = 'Body',
      font = 'Bold',

      // Casing
      uppercase,

      verticalUnitPadding = 1 / 2,
      horizontalUnitPadding = 1,

      letterSpacing,

      shallot,

      variant = 'default',

      // Non-Style Props
      ...nonStyleProps
    } = props

    const theme = useTheme()

    let styles: TagShallot = {
      container: {
        display: 'flex',
        backgroundColor: getColor(color, 100),
        borderRadius: getRadius(radius),
        transition: `
          background-color 200ms ease-in-out,
          border-color 300ms ease-in-out,
          transform 300ms ease-in-out,
          box-shadow 300ms ease-in-out
        `,

        // Variant (overrides)
        ...theme?.variants?.Tag?.[variant]?.container,
      },
      title: {
        fontSize: getFontSize('md'),
        color: getColor(color, 700),
        lineHeight: getLineHeight('md'),
        typeface: getTypeface(typeface, font),
        transition: 'color 300ms ease-in-out',
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        ...(letterSpacing && {
          letterSpacing: getLetterSpacing(letterSpacing),
        }),
        textAlign: 'center',
        flex: 1,

        // Variant (overrides)
        ...theme?.variants?.Tag?.[variant]?.title,
      },
    }

    if (outline)
      styles = applyStyles(styles, {
        container: {
          backgroundColor: getColor('Shading', 100),

          // Variant (overrides)
          ...theme?.variants?.Tag?.[variant]?.outline?.container,
        },
        title: {
          textColor: getColor(color, 300),

          // Variant (overrides)
          ...theme?.variants?.Tag?.[variant]?.outline?.title,
        },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      title: shallot?.title,
    })

    return <TagComponent {...(nonStyleProps as T)} shallot={styles} />
  }
