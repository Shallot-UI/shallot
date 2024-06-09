import { Theme } from '@repo/theme'

import { getVariant } from '../../mixins'

export const getVariantStyle =
  (variantNamespace: string, defaultVariant: string = 'Default') =>
  <T extends { shallot?: {}; variant?: string }>({
    variant = defaultVariant,
  }: T) =>
  ({ theme }: { theme: Theme }) => {
    const variantShallot =
      (variantNamespace
        ? getVariant(variantNamespace, variant)({ theme })
        : {}) ?? {}

    return Object.entries(variantShallot).map(([key, getter]) => {
      let value = typeof getter === 'function' ? getter({ theme }) : getter

      // In some cases, values can be objects. When they are, we want to
      // merge them into the shallot object directly rather than under their
      // key. For example, "Shadow" is an object containing box shadow,
      // border, and transform values.
      value = typeof value === 'object' ? value : { [key]: value }

      return value
    })
  }
