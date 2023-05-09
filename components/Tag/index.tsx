import { CSSObject, DefaultTheme } from 'styled-components'
import { ColorName } from '@shallot-ui/theme'
import { applyStyles, getUnits, ShallotProp } from '@shallot-ui/core'

export type TagStyleProps = {
  color?: ColorName
  radius?: keyof DefaultTheme['radii']
  outline?: boolean
  uppercase?: boolean
  verticalUnitPadding?: number
  horizontalUnitPadding?: number
}

export type TagShallot = {
  container: ShallotProp<CSSObject>
  label: ShallotProp<CSSObject>
}

export type TagProps<T> = T &
  TagStyleProps & {
    shallot: TagShallot
  }

// TODO: Update this so that getTagStyles returns both the styles and the
// props that should be passed to the Tag as separate objects.

export const getTagStyles = <T,>(
  props: TagProps<T>,
): [TagShallot, Omit<T, 'shallot' | keyof TagStyleProps>] => {
  const {
    // General
    color = 'Shading',
    radius = 'sm',
    // animation,
    outline,

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
      backgroundColor: `${color}.125`,
      radius,
      marginLeft: getUnits(horizontalUnitPadding),
      marginRight: getUnits(horizontalUnitPadding),
      marginTop: getUnits(verticalUnitPadding),
      marginBottom: getUnits(verticalUnitPadding),
      transition: `
        background-color 200ms ease-in-out,
        border-color 300ms ease-in-out,
        transform 300ms ease-in-out,
        box-shadow 300ms ease-in-out
      `,
    },
    label: {
      fontSize: 'md',
      textColor: `${color}.400`,
      lineHeight: 'md',
      transition: 'color 300ms ease-in-out',
      unitsAround: 1,
      unitsAbove: 1 / 2,
      unitsBelow: 1 / 2,
      textAlign: 'center',
      flex: 1,
    },
  }

  if (outline)
    styles = applyStyles(styles, {
      container: { backgroundColor: 'Shading.100' },
      label: { textColor: `${color}.300` },
    })

  styles = applyStyles(styles, {
    container: shallot?.container,
    label: shallot?.label,
  })

  return [styles, nonStyleProps]
}
