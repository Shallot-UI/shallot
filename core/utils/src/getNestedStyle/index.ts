import { ShallotProp } from '@shallot-ui/core-theme'
import { CSSObject } from 'styled-components'
import { Theme } from '@shallot-ui/core-theme'

import { getStyle } from '../getStyle'

/**
 * Returns a function that generates CSS styles based on a nested `shallot` object.
 * The `shallot` object is a set of key-value pairs where the key is a CSS property and the value is either a string or a function that returns a string.
 * If the value is a function, it will be called with the `theme` object as its argument.
 * If the value is an object, `getStyle` will be called recursively on that object.
 * @param componentName - The name of the component to generate styles for.
 * @param state - The name of the state object to generate styles for.
 * @returns A function that generates CSS styles based on the nested `shallot` object.
 */
export const getNestedStyle =
  (componentName: string, state?: string) =>
  ({ shallot = {} }: any) =>
  ({ theme }: { theme: Theme }): CSSObject => {
    let nestedShallot = shallot
    if (state) {
      nestedShallot = nestedShallot?.[state]
    }
    nestedShallot = nestedShallot?.[componentName]

    return getStyle({ shallot: nestedShallot as ShallotProp })({ theme })
  }
