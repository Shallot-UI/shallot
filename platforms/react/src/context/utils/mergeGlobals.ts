import { ThemeGlobals } from '@shallot-ui/core-theme'

const mergeGlobals = (globals: ThemeGlobals, newGlobals?: ThemeGlobals) => {
  const newGlobalsKeys = newGlobals ? Object.keys(newGlobals) : []
  const mergedGlobals: ThemeGlobals = {}

  // Get all keys from both objects and remove duplicates.
  const allKeys = Object.keys(globals)
    .concat(newGlobalsKeys)
    .filter((key, index, self) => self.indexOf(key) === index)

  allKeys.forEach((key) => {
    // If this is a mode, we merge the objects to preserve the default keys.
    if (key.indexOf('mode:') === 0) {
      mergedGlobals[key] = { ...globals[key], ...newGlobals?.[key] }
      return
    }

    // Otherwise, we choose the new value if it exists.
    mergedGlobals[key] = newGlobals?.[key] ?? globals[key]
  })

  return mergedGlobals
}

export default mergeGlobals
