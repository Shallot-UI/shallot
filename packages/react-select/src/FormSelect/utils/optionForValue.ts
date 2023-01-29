// optionForValue
// ==============
// Expands a value to an option object.
// This allows us to preserve the react-select option object shape in the formik
// input value, while storing a simple string or array of strings in the
// database.

export const optionForValue = (
  value: string | string[] | undefined,
  options: any[] | undefined,
  multiple: boolean | undefined,
) => {
  if (!options) {
    console.error('Options are undefined')
    return undefined
  }

  const findOption = (value: string) =>
    options?.find((o: any) => o.value === value)

  if (multiple) {
    // If the value is undefined, return an empty array
    if (typeof value === 'undefined') {
      return []
    }
    // If the value is a string, return an empty array and log an error
    if (typeof value === 'string') {
      console.error('Multiple select value should be an array of strings')
      return []
    }
    if (Array.isArray(value)) {
      return value.map(findOption)
    }
  }

  if (typeof value === 'string') {
    return findOption(value)
  }
}
