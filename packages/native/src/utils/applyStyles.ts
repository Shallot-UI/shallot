// Apply Styles
// ============
// A utility function to merge two style objects. This is useful when writing
// `getStyles` functions where the state of the component causes changes to
// the base styles.

export const applyStyles = <T extends Record<string, any>>(
  base: T, // base style object
  overrides: Partial<T> = {}, // style object to override the base styles
) => {
  // Create a shallow copy of the base style object
  let styles: T = { ...base }

  // Iterate through the keys of the overrides style object
  Object.keys(overrides).forEach((key) => {
    // Check if the current key in the overrides object is an object (nested)
    if (typeof overrides[key] === 'object') {
      // If the current key is an object, recursively call 'applyStyles' to
      // merge the base and overrides styles
      styles[key as keyof T] = applyStyles(
        base[key] ?? {},
        overrides[key] ?? {},
      )
    } else {
      // If the current key is not an object, update the corresponding value in
      // the 'styles' object
      styles[key as keyof T] = overrides[key] ?? base[key]
    }
  })

  // Return the merged style object
  return styles
}

/*
// Example:
// --------
  let styles = {
    container: {
      backgroundColor: 'Primary.300',
      fontSize: 'lg'
    }
  }

  // Override the 'backgroundColor' property of the 'container' style object
  // without overwriting the 'fontSize' property.
  if (state.isHovered) {
    styles = applyStyles(styles, {
      container: { backgroundColor: 'Primary.400' }
    })
  }
*/
