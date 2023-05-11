import { ComponentType } from 'react'
import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import {
  applyStyles,
  getColor,
  getFontSize,
  getLineHeight,
  getRadius,
  getTypeface,
  getUnits,
  ShallotProp,
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
}

export type TagShallot = {
  container: ShallotProp<CSSObject>
  title: ShallotProp<CSSObject>
}

export type TagProps<T> = T &
  TagStyleProps & {
    shallot?: TagShallot
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

      shallot,

      // Non-Style Props
      ...nonStyleProps
    } = props

    let styles: TagShallot = {
      container: {
        display: 'flex',
        backgroundColor: getColor(color, 125),
        borderRadius: getRadius(radius),
        transition: `
          background-color 200ms ease-in-out,
          border-color 300ms ease-in-out,
          transform 300ms ease-in-out,
          box-shadow 300ms ease-in-out
        `,
      },
      title: {
        fontSize: getFontSize('md'),
        color: getColor(color, 400),
        lineHeight: getLineHeight('md'),
        typeface: getTypeface(typeface, font),
        transition: 'color 300ms ease-in-out',
        marginLeft: getUnits(horizontalUnitPadding),
        marginRight: getUnits(horizontalUnitPadding),
        marginTop: getUnits(verticalUnitPadding),
        marginBottom: getUnits(verticalUnitPadding),
        textAlign: 'center',
        flex: 1,
      },
    }

    if (outline)
      styles = applyStyles(styles, {
        container: { backgroundColor: getColor('Shading', 100) },
        title: { textColor: getColor(color, 300) },
      })

    styles = applyStyles(styles, {
      container: shallot?.container,
      title: shallot?.title,
    })

    return <TagComponent {...(nonStyleProps as T)} shallot={styles} />
  }
