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
      }
      // handle mixin functions
      else if (typeof obj[key] === 'function') {
        serialized[key] = obj[key]({ theme: inputTheme })
        if (serialized[key] === null || serialized[key] === undefined) {
          throwError(key, obj[key])
        }
      }
      // handle non-serializable values
      else if (obj[key] === null || obj[key] === undefined) {
        throwError(key, obj[key])
      }
      // handle serializable values
      else {
        serialized[key] = obj[key]
      }
    }
    return serialized
  }

  const outputTheme = serializeRecursively(inputTheme)
  return outputTheme
}

const throwError = (key: string, value: any) => {
  throw new Error(
    `Error serializing theme value for key "${key}" because it's value "${value}" is not a serializable type. Please ensure that all data being serialized is of a serializable type.`,
  )
}
