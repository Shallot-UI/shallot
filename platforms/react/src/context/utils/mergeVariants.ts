import { ThemeVariants } from '@shallot-ui/core-theme'

const mergeVariants = (
  variants: ThemeVariants,
  newVariants?: ThemeVariants,
) => {
  const newVariantsNamespaces = newVariants ? Object.keys(newVariants) : []
  const mergedVariants: ThemeVariants = {}

  // Get all keys from both objects and remove duplicates.
  const allNamespaces = Object.keys(variants)
    .concat(newVariantsNamespaces)
    .filter((key, index, self) => self.indexOf(key) === index)

  allNamespaces.forEach((key) => {
    // We merge all of the variants in the same namespace.
    mergedVariants[key] = { ...variants[key], ...newVariants?.[key] }
  })

  return mergedVariants
}

export default mergeVariants
