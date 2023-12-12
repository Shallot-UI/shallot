import { DefaultTheme } from 'styled-components'

/**
 * Takes a theme object and returns a JSON serializable version of it.
 * @param inputTheme - The input theme object to be serialized.
 * @returns A JSON serializable version of the input theme object.
 */

export const getSerializableTheme = (inputTheme: DefaultTheme) => {
  const serializeRecursively = (obj: any) => {
    const serialized = {} as any

    for (const key in obj) {
      // if it's an object, recursively call this function
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        serialized[key] = serializeRecursively(obj[key])
        continue
      }

      // handle mixin functions
      if (typeof obj[key] === 'function') {
        const value = obj[key]({ theme: inputTheme })
        if (value !== null && value !== undefined) serialized[key] = value
        continue
      }

      // handle non-serializable values
      if (obj[key] === null || obj[key] === undefined) {
        continue
      }

      // handle serializable values
      serialized[key] = obj[key]
    }

    return serialized
  }

  const outputTheme = serializeRecursively(inputTheme)
  return outputTheme
}
