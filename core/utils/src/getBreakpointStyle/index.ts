import { DefaultTheme } from 'styled-components'
import { ShallotProp, makeTheme } from '@shallot-ui/core-theme'

import { getStyle } from '../getStyle'

/**
 * Get a set of media query breakpoints from the theme using a font size.
 * @param fontSize - The font size name.
 * @returns The set of media query breakpoints.
 */
export const getBreakpointsStyle =
  <T extends { shallot?: ShallotProp }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!theme.breakpoints) return
    const modifiers: any = {}

    // only certain properties are supported by breakpoints.
    const supportedShallot: ShallotProp = {}

    // if the font size is a mixin, we'll update it against the theme.
    if (typeof shallot.fontSize === 'function') {
      supportedShallot.fontSize = shallot.fontSize
    }

    Object.entries(theme.breakpoints).forEach(([width, subtheme]) => {
      const value = getStyle({ shallot: supportedShallot })({
        theme: makeTheme(subtheme),
      })

      // Ensure `value` is not empty
      if (Object.keys(value).length > 0) {
        modifiers[`@media(min-width: ${width}px)`] = value
      }
    })

    return modifiers
  }
